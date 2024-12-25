import Link from "next/link";
import Button from "@/components/button";
import Input from "@/components/input";
import { forgotPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";

export default async function ForgotPassword(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;

  return (
    <main className="center flex-col h-screen w-screen gap-8 p-8 lg:p-4">
      <div className="center flex-col gap-1">
        <h1>Forgot Password</h1>
        <p className="opacity-40">Input your data to proceed</p>
      </div>

      <form className="center flex-col w-full max-w-sm gap-4">
        <label className="center flex-col w-full gap-1">
          <p className="mx-2 mr-auto">Email</p>
          <Input placeholder="email@example.com" type="email" name="email" fullWidth={true} isRequired={true}/>
        </label>

        <Button formAction={forgotPasswordAction} fullWidth={true}>Submit</Button>
      </form>

      <div className="center gap-4">
        <Link href={"/"}>Terms</Link>
        <p>•</p>
        <Link href={"/"}>Privacy</Link>
      </div>
    </main>
  )
}