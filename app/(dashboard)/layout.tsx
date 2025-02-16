import { auth } from "@/auth";
import Header from "@/components/header/header";
import Aside from "@/components/sidebar/aside";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

const Layout = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { websiteId: string };
}>) => {
  const session = await auth();
  const userEmail = session?.user?.email;

  if (!session) {
    redirect("/");
  }

  // Fetch the selected website
  const website = await prisma.website.findFirst({
    where: {
      id: params.websiteId,
      userEmail,
    },
  });

  // Fetch all websites owned by the user
  const userWebsites = await prisma.website.findMany({
    where: {
      userEmail,
    },
    select: {
      id: true,
      name: true,
      userEmail: true, // ✅ Add userEmail so the type matches
    },
  });

  return (
    <div className="h-full flex bg-background-light dark:bg-background-dark">
      {/* Pass website & all user websites */}
      <Aside website={website ?? null} userWebsites={userWebsites} />
      <main className="flex-1 h-full overflow-y-auto">
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Layout;
