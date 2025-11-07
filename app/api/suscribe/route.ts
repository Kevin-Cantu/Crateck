import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "El correo es requerido" }, { status: 400 });
    }

    const apiKey = process.env.CONVERTKIT_API_KEY;
    const formId = process.env.CONVERTKIT_FORM_ID;

    if (!apiKey || !formId) {
      console.error("Faltan variables de entorno: CONVERTKIT_API_KEY o CONVERTKIT_FORM_ID");
      return NextResponse.json(
        { error: "Configuración del servidor incompleta" },
        { status: 500 }
      );
    }

    const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: apiKey,
        email,
        first_name: name,
      }),
    });

    const data = await response.json();
console.log(data)
    // ✅ Detectar si ya está suscrito
    const alreadySubscribed =
      data?.message?.toLowerCase().includes("already subscribed") ||
      data?.error?.message?.toLowerCase().includes("already subscribed");

    if (alreadySubscribed) {
      return NextResponse.json(
        { message: "Este correo ya está suscrito a la lista." },
        { status: 200 }
      );
    }

    if (!response.ok) {
      console.error("❌ Error al suscribirse:", data);
      return NextResponse.json(
        { error: "Error al suscribirse", details: data },
        { status: response.status || 500 }
      );
    }

    return NextResponse.json({ message: "✅ Suscrito correctamente", data });
  } catch (err) {
    console.error("💥 Error interno del servidor:", err);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}