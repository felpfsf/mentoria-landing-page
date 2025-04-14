export const pretender = false;

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, whatsapp } = await request.json();

    const CLICKUP_API_TOKEN = import.meta.env.CLICKUP_API_TOKEN;
    const CLICKUP_LIST_ID = import.meta.env.CLICKUP_LIST_ID;

    const response = await fetch(
      `https://api.clickup.com/api/v2/list/${CLICKUP_LIST_ID}/task`,
      {
        method: "POST",
        headers: {
          Authorization: CLICKUP_API_TOKEN,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `Novo Lead: ${name}`,
          description: `E-mail: ${email}\nWhatsApp: ${whatsapp}`,
          status: "to do",
          tag: ["workshop"],
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      return new Response(JSON.stringify({ success: false, error }), {
        status: 400,
      });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    const sanitizedError = error instanceof Error ? error.message : "An unexpected error occurred";
    return new Response(JSON.stringify({ success: false, error: sanitizedError }), {
      status: 500,
    });
  }
};
