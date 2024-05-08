import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} bg-[#FFFDF7]`}>
      <div>
        <h2>Hi, my name is</h2>
        <h1>Jay Park</h1>
        <h2>User-oriented Software Engineer</h2>
      </div>
    </main>
  );
}
