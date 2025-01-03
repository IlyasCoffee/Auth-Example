import Auth from "@/components/auth";
import { FormMessage, Message } from "@/components/form-message";

export default async function Signup(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;

  return (<Auth isSignup={true}/>);
}
