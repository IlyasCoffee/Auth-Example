import Link from "next/link";
import Button from "@/components/button";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { signOutAction } from "../actions";

export default async function Protected() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <main className="center flex-col min-h-screen w-full gap-8">
      <h1 className="animate-pulse">Auth-Example</h1>

      <div className="center flex-col w-60 gap-2">
        <form className="w-full">
          <Button formAction={signOutAction} fullWidth={true}>Signout</Button>
        </form>

        <form className="w-full">
          <Button variant="secondary" fullWidth={true}>Delete account</Button>
        </form>

        <Link href={"/protected/reset-password"} className="link underline">Reset Password</Link>
      </div>
    </main>
  );
}
