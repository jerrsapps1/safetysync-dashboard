import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest, { params }: { params: { token: string }}) {
  const { token } = params;

  // TODO: replace with real DB lookup for trainee by public_token
  const demo = [
    { code: "20251103_lopez_confinedspaces_ab12", training_title: "Confined Spaces", training_date: "2025-11-03", expiry_date: "2026-11-03", pdf_url: "https://cdn.example.com/certs/lopez_confined.pdf" },
    { code: "20240914_lopez_forklift_3fd7",       training_title: "Forklift (PIT)",  training_date: "2024-09-14", expiry_date: "2027-09-14", pdf_url: "https://cdn.example.com/certs/lopez_forklift.pdf" }
  ];
  return NextResponse.json(demo);
}
