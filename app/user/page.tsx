import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import SignOut from "../components/SignOut";
export default async function UserPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin?callbackUrl=/protected/server");
  }
  return (
    <div className="flex flex-col ">
      <h1>You are logged in as : </h1>
      <p>{session?.user?.name}</p>
      <p>{session?.user?.email}</p>
      <SignOut />
    </div>
  );
}
