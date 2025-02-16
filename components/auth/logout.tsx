import { signOut } from "@/auth";
import { FiLogOut } from "react-icons/fi";

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        type="submit"
        className="flex items-center bg-gray-300 dark:bg-gray-700 text-black dark:text-white p-2 rounded-full 
                   shadow-md transition-all hover:scale-105 hover:bg-opacity-90"
      >
        <FiLogOut size={20} />
      </button>
    </form>
  );
}
