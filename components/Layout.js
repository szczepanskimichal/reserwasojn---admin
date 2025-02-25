import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

export default function Layout({ children }) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-gray-300 w-screen h-screen items-center justify-center">
        <div className="container flex flex-col">
          <h1 className="text-center">Log In</h1>
          {/* <button className="bg-white flex items-center justify-center gap-2">
          <FaFacebookSquare className="size-6 text-blue-900" />
          Use Facebook
        </button> */}
          <button
            onClick={() => {
              signIn("google");
            }}
            className="bg-white flex items-center justify-center gap-2"
          >
            <FcGoogle className="size-6" />
            Use Google
          </button>
          {/* <button className="bg-white flex items-center justify-center gap-2">
          <FaApple className="size-6 " />
          Use Apple
        </button> */}
        </div>
      </div>
    );
  } else {
    // return <div>Logged in {session.user.email}</div>;
    return (
      <div className="relative">
        <div className="bg-gray-200 flex min-h-screen">
          <Nav />
          <div className="bg-gray-50 shadow-xl flex-grow sm:m-5 ml-0 sm:rounded-lg p-3">
            {children}
          </div>
        </div>
        <div className="sm:hidden absolute top-0 right-0 h-screen">
          <MobileNav />
        </div>
      </div>
    );
  }
}
