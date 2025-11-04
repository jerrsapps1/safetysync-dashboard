import { apiGet } from "@/lib/api";

export default async function EmployeePage({ params }: { params: { token: string }}) {
  const list = await apiGet(`/api/u/${params.token}`);
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Employee Certificates</h1>
      <pre className="mt-4 rounded bg-[#0d1117] p-4 border border-[#30363d] text-[#c9d1d9] overflow-auto">
        {JSON.stringify(list, null, 2)}
      </pre>
    </main>
  );
}
