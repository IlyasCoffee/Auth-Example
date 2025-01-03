import Link from "next/link";
import Button from "@/components/button";
import Input from "@/components/input";
import { resetPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";

export default async function ResetPassword(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;

  return (
    <main className="center flex-col h-screen w-screen gap-8 p-8 lg:p-4">
      <div className="text-center center flex-col max-w-sm gap-1">
        <h1>Reset Password</h1>
        <h3>Try to use a password manager to avoid this situation.</h3>
      </div>

      <form className="center flex-col w-full max-w-sm gap-4">
        <label className="center flex-col w-full gap-1">
          <p className="mx-2 mr-auto">New password</p>
          <Input placeholder="••••••••••••" type="password" name="password" fullWidth={true} isRequired={true}/>
        </label>

        <label className="center flex-col w-full gap-1 mb-4">
          <p className="mx-2 mr-auto">Confirm password</p>
          <Input placeholder="••••••••••••" type="password" name="confirmPassword" fullWidth={true} isRequired={true}/>
        </label>

        <Button formAction={resetPasswordAction} fullWidth={true}>Continue</Button>
      </form>

      <div className="center gap-4">
        <Link href={"/"}>Terms</Link>
        <p>•</p>
        <Link href={"/"}>Privacy</Link>
      </div>
    </main>
  )
}