export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] p-8">
      <h1 className="text-3xl font-bold">SafetySync.ai — Dashboard</h1>
      <p className="mt-2 text-[#8b949e]">Starter dashboard (demo links):</p>
      <ul className="list-disc mt-6 space-y-2 pl-5">
        <li>
          <a className="text-[#2f81f7] underline" href="/verify/demoToken">
            View a single certificate (demo)
          </a>
        </li>
        <li>
          <a className="text-[#2f81f7] underline" href="/u/demoUserToken">
            View employee certs (demo)
          </a>
        </li>
      </ul>
    </main>
  );
}
