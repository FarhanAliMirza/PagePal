// app/page.tsx
import Image from "next/image";
import LoginForm from "./component/LoginForm";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-10 items-center">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
          className="dark:invert"
        />
        <h1 className="text-2xl font-bold">Login to Book Exchange</h1>
        <LoginForm />
      </main>
    </div>
  );
}
