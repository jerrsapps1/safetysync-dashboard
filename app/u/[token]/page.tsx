import { apiGet } from "@/lib/api";
export default async function EmployeePage({ params }: { params: { token: string }}) {
  const list = await apiGet(`/api/u/${params.token}`);
  return (
    <main style={{padding:24}}>
      <h1>Employee Certificates</h1>
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </main>
  );
}
