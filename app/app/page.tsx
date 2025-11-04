import Link from "next/link";
export default function DashboardHome() {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">SafetySync.ai — Dashboard</h1>
      <ul className="space-y-2">
        <li><Link className="underline" href="/app/certificates">Issue Certificate (coming next)</Link></li>
        <li><Link className="underline" href="/app/wallet-cards">Issue Wallet Card (coming next)</Link></li>
        <li><Link className="underline" href="/u/demoUserToken">View employee certs (demo)</Link></li>
      </ul>
    </main>
  );
}
