import { Resend } from "resend";

const MAX_FILES = 3;
const MAX_TOTAL_BYTES = 15 * 1024 * 1024; // 15 MB

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");

      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const formData = await request.formData();

    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !message) {
      return Response.json(
        { error: "Name and message are required." },
        { status: 400 },
      );
    }

    const files = formData
      .getAll("images")
      .filter((item): item is File => item instanceof File && item.size > 0);

    if (files.length > MAX_FILES) {
      return Response.json(
        { error: `Please attach no more than ${MAX_FILES} photos.` },
        { status: 400 },
      );
    }

    const invalidFile = files.find((file) => !file.type.startsWith("image/"));

    if (invalidFile) {
      return Response.json(
        { error: "Only image files can be attached." },
        { status: 400 },
      );
    }

    const totalSize = files.reduce((total, file) => total + file.size, 0);

    if (totalSize > MAX_TOTAL_BYTES) {
      return Response.json(
        { error: "Photos must be no more than 15 MB in total." },
        { status: 400 },
      );
    }

    const attachments = await Promise.all(
      files.map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()).toString("base64"),
      })),
    );

    const { data, error } = await resend.emails.send({
      from: "Craftworkz Website <website@craftworkz.co.uk>",
      to: ["contact@craftworkz.co.uk"],
      subject: `New Craftworkz enquiry from ${name}`,

      html: `
        <h2>New website enquiry</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>

        <p>
          <strong>Phone:</strong>
          ${escapeHtml(phone || "Not provided")}
        </p>

        <p>
          <strong>Email:</strong>
          ${escapeHtml(email || "Not provided")}
        </p>

        <p><strong>Message:</strong></p>

        <p>
          ${escapeHtml(message).replaceAll("\n", "<br />")}
        </p>

        <p>
          <strong>Photos attached:</strong>
          ${files.length}
        </p>
      `,

      attachments,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        { error: "Email could not be sent." },
        { status: 500 },
      );
    }

    return Response.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact route error:", error);

    return Response.json({ error: "Something went wrong." }, { status: 500 });
  }
}
