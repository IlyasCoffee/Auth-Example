import Auth from "@/components/auth";
import { FormMessage, Message } from "@/components/form-message";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;

  return (<Auth/>);
}
