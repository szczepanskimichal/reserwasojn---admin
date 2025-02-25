import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { FaFacebookSquare, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

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
    return <div>Logged in </div>;
  }
}
