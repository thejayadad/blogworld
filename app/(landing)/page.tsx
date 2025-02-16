import { auth } from "@/auth";
import SignIn from "@/components/auth/login";
import SignOut from "@/components/auth/logout";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth()
  const userEmail = session?.user?.email
    const website = await prisma.website.findFirst({
        where: {
            userEmail
        }
    })
    if(website){
        redirect(`/${userEmail}/${website.id}`)
    }
  return (
    <div>
      homePage

    </div>
  );
}
