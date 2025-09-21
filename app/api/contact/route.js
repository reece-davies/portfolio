import Mailjet from "node-mailjet";

export async function POST(req) {
  try {
    const { name, email, message, company } = await req.json();

    const mailjet = Mailjet.apiConnect(
      process.env.MAILJET_API_KEY,
      process.env.MAILJET_API_SECRET
    );

    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_FROM_EMAIL,
            Name: process.env.MAILJET_FROM_NAME,
          },
          To: [
            {
              Email: process.env.MAILJET_TO_EMAIL,
              Name: "Recipient Name",
            },
          ],
          Subject: `New contact form submission from ${name}`,
          TextPart: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`,
          HTMLPart: `<h3>New contact form submission</h3>
                     <p><strong>Name:</strong> ${name}</p>
                     <p><strong>Email:</strong> ${email}</p>
                     <p><strong>Company:</strong> ${company}</p>
                     <p><strong>Message:</strong> ${message}</p>`,
        },
      ],
    });

    await request;
    return new Response(JSON.stringify({ status: "success" }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ status: "error", error: err.message }), {
      status: 500,
    });
  }
}
