"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { Button } from "src/components/ui/button";
import RazorpayButton from "src/components/frontend/TestingPaymentPage";
import Navbar from "@/components/frontend/Navbar";
import Sidebar from "@/components/frontend/Sidebar";

export default function DashboardPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const userId: any = session?.user?.id;


  const handleLogout = async () => {
    const confirmation = confirm("Are you sure you want to log out?");
    if (confirmation) {
      await fetch("/api/auth/logout", { method: "POST" });
      await signOut({ callbackUrl: "/signin" });
    }
  };

  const createrouter = async () => {
    router.push("/create-course");
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <div>
        <Navbar openNav={()=>null} loggedIn={true}/>
        <Sidebar/>
        <div>
          <h1>
            {" "}
            ` hy {session?.user?.name} you have loged in with{" "}
            {session?.user?.email} and your role is {session?.user?.role} your
            token is token will expire on {session?.expires}`{" "}
          </h1>

          <Button onClick={createrouter} className="bg-blue-700">
            create course
          </Button>

          <Button className="bg-red-700" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
        {/* <RazorpayButton amount={1} userId={userId} /> */}
      </div>
    );
  }

  return null; // Or show a message like "You are not authenticated"
}
