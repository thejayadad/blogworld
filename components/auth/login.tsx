import { signIn } from "@/auth";
import { FiUser } from "react-icons/fi";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button
        type="submit"
        className="flex items-center bg-gray-300 dark:bg-gray-700 text-black dark:text-white p-2 rounded-full 
        shadow-md transition-all hover:scale-105 hover:bg-opacity-90"
      >
        <FiUser size={20} />
        <span>Sign in with Google</span>
      </button>
    </form>
  );
}
