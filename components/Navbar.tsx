import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex justify-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="Vista Logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-mono text-gray-200 max-sm:hidden ml-2">
          Vista
        </p>
      </Link>

      <div className="justify-between-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
