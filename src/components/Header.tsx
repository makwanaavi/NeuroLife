import Link from "next/link";
import { SidebarTrigger } from "./ui/sidebar";
import LogoutButton from "./LogoutButton";
import { Button } from "./ui/button";
import DarkMode from "./DarkMode";

const Header = () => {
  const user = "Avi";
  return (
    <header className="relative flex h-24 w-full items-center justify-between bg-gradient-to-r from-red-100 via-red-50 to-white px-3 sm:px-8 shadow-md rounded-b-2xl">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-red-600" />
        <Link
          href="/"
          className="flex flex-col gap-0 leading-tight text-gray-800"
        >
          <h1 className="text-xl font-bold tracking-wide text-red-600">
            NeuroLife
          </h1>
          <h5 className="text-sm font-medium text-red-300">By @VI</h5>
        </Link>
      </div>
      <div className="flex gap-4">
        {user ? (
          <LogoutButton />
        ) : (
          <>
            <Button asChild>
              <Link href={"/signup"} className="hiddle sm:block">
                SignUp
              </Link>
            </Button>

            <Button asChild>
              <Link href={"/login"} className="hiddle sm:block">
                Login
              </Link>
            </Button>
          </>
        )}
        <DarkMode/>
      </div>
    </header>
  );
};

export default Header;
