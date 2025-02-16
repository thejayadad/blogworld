import { auth } from "@/auth";
import SignIn from "@/components/auth/login";
import SignOut from "@/components/auth/logout";

export default async function Home() {
  const session = await auth()
  
  return (
    <div>
      homePage

    </div>
  );
}
