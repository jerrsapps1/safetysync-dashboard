import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest, { params }: { params: { token: string }}) {
  const { token } = params;

  // TODO: replace with real DB lookup
  const demo = {
    code: "20251103_lopez_confinedspaces_ab12",
    trainee_name: "Ana Lopez",
    training_title: "Confined Spaces — Authorized Entrant/Attendant",
    training_date: "2025-11-03",
    expiry_date: "2026-11-03",
    pdf_url: "https://cdn.example.com/certs/demo.pdf",
    html_url: "https://cdn.example.com/certs/demo.html",
    token
  };
  return NextResponse.json(demo);
}
