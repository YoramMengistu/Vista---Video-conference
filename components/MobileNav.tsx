"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px] ">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={36}
            height={36}
            alt="Hamburget Item"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="transition-all duration-300">
          <SheetHeader className="text-gray-100 font-bold">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Navigate to </SheetDescription>
          </SheetHeader>
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              width={32}
              height={32}
              alt="Vista Logo"
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-mono text-gray-200 ">Vista</p>
          </Link>

          <div className="flex h-[calc(1--vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive = pathname === link.route;

                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        key={link.label}
                        href={link.route}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60 text-gray-200 hover:text-blue-200 transition-all duration-700",
                          {
                            "bg-blue-1 hover:text-white": isActive,
                          }
                        )}
                      >
                        <Image
                          src={link.imgURL}
                          alt={link.label}
                          width={20}
                          height={20}
                        />

                        <p className="t font-semibold ">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
