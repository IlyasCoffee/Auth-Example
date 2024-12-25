import Link from "next/link";
import Button from "@/components/button";
import Input from "@/components/input";
import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;

  return (
    <main className="bg-secondary center flex-col items-end h-screen w-screen">
      <div className="bg-background center flex-col h-full w-full lg:w-1/2 gap-8 p-8 lg:p-4">
        <div className="center flex-col gap-1">
          <h1>Welcome back</h1>
          <p className="opacity-40">Input your data to proceed</p>
        </div>

        <form className="center flex-col w-full max-w-sm gap-4">
          <label className="center flex-col w-full gap-1">
            <p className="mx-2 mr-auto">Email</p>
            <Input placeholder="email@example.com" type="email" name="email" fullWidth={true} isRequired={true}/>
          </label>

          <label className="center flex-col w-full gap-1 mb-4">
            <p className="mx-2 mr-auto">Password</p>
            <Input placeholder="••••••••••••" type="password" name="password" fullWidth={true} isRequired={true}/>
            <Link href={"/login"} className="link mx-2 ml-auto">Forget Password?</Link>
          </label>

          <Button formAction={signInAction} fullWidth={true}>Submit</Button>
        </form>

        <div className="center w-full max-w-sm gap-4">
          <span className="border border-dashed border-opacity-20 w-full"/>
          <p className="opacity-40 uppercase">Or</p>
          <span className="border border-dashed border-opacity-20 w-full"/>
        </div>

        <form className="w-full max-w-sm">
          <Button variant="secondary" fullWidth={true}>Login with Google</Button>
        </form>

        {/* Add a link to signup */}

        <div className="center gap-4">
          <Link href={"/"}>Terms</Link>
          <p>•</p>
          <Link href={"/"}>Privacy</Link>
        </div>
      </div>
    </main>
  );
}
