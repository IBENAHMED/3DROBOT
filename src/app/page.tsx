import dynamic from "next/dynamic";

export default function Home() {

  const Scene = dynamic(() => import("@/components/Scene"), { ssr: false })

  return (
    <main className="h-screen">
      <Scene />
    </main>
  );
}
