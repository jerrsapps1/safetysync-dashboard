import { apiGet } from "@/lib/api";
export default async function VerifyPage({ params }: { params: { token: string }}) {
  const data = await apiGet(`/api/verify/${params.token}`);
  return (
    <main style={{padding:24}}>
      <h1>Verify Certificate</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
