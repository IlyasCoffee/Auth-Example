import Link from "next/link";
import Button from "./button";
import Input from "@/components/input";
import { signInAction, signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";

interface AuthProps {
  isSignup?: boolean;
}

export default async function Auth({ isSignup = false }: AuthProps) {
  return (
    <main className="center h-screen w-screen p-8">
      <div className="bg-background center flex-col h-full w-full lg:w-1/2 gap-8">
        <div className="text-center center flex-col max-w-sm gap-1">
          <h1>Auth Component</h1>
          <h3>The auth component is used in both <Link href={"/signup"} className="link">Signup</Link> & <Link href={"/login"} className="link">Login</Link>.</h3>
        </div>

        <div className="center flex-col w-full gap-4">
          <div className="center w-full max-w-sm gap-2 mb-2">
            <form className="w-full">
              <Button variant="secondary" fullWidth={true}>Google</Button>
            </form>

            <form className="w-full">
              <Button variant="secondary" fullWidth={true}>GitHub</Button>
            </form>
          </div>

          <div className="center w-full max-w-sm gap-4">
            <span className="border-b-2 border-dashed border-opacity-10 w-full"/>
            <p className="uppercase">Or</p>
            <span className="border-b-2 border-dashed border-opacity-10 w-full"/>
          </div>

          <form className="center flex-col w-full max-w-sm gap-4">
            {isSignup &&
              <label className="center flex-col w-full gap-1">
                <p className="mx-2 mr-auto">Name</p>
                <Input placeholder="eg. Ali Ahmed" type="text" name="name" fullWidth={true} isRequired={true}/>
              </label>
            }

            <label className="center flex-col w-full gap-1">
              <p className="mx-2 mr-auto">Email</p>
              <Input placeholder="eg. ali@email.com" type="email" name="email" fullWidth={true} isRequired={true}/>
            </label>

            <label className="center flex-col w-full gap-1 mb-4">
              <p className="mx-2 mr-auto">Password</p>
              <Input placeholder="••••••••••••" type="password" name="password" fullWidth={true} isRequired={true}/>
              {!isSignup && <Link href={"/forgot-password"} className="link mx-2 ml-auto">Forget Password?</Link>}
            </label>

            {isSignup ?
              <Button formAction={signUpAction} fullWidth={true}>Continue</Button>
            :
              <Button formAction={signInAction} fullWidth={true}>Continue</Button>
            }
          </form>
        </div>

        <div className="center gap-4">
          <Link href={"/"}>Terms</Link>
          <p>•</p>
          <Link href={"/"}>Privacy</Link>
        </div>
      </div>

      <div className="bg-secondary rounded-3xl hidden xl:center h-full w-1/2"></div>
    </main>
  );
}
