import Link from "next/link";

import Button from "@/components/button";

export default function Home() {
  return (
    <main className="center flex-col min-h-screen w-full gap-8">
      <h1 className="animate-pulse">Auth-Example</h1>

      <div className="center flex-col w-60 gap-2">
        <Button fullWidth={true}>
          <Link href={"/login"}>Login</Link>
        </Button>

        <Button variant="secondary" fullWidth={true}>
          <Link href={"/signup"}>Signup</Link>
        </Button>
      </div>
    </main>
  );
}
