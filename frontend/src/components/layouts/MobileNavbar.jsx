import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "../ui/separator";
import { Menu } from "lucide-react";
import Link from "next/link";
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";

// TODO: update nav content, use dropdowns
const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={32} className="cursor-pointer text-[#e0e1dd]" />
      </SheetTrigger>
      <SheetContent
        side="top"
        className="bg-[#1B263B] text-[#e0e1dd] flex flex-col gap-y-0"
      >
        <SheetHeader>
          <SheetTitle className="text-5xl text-[#e0e1dd]">
            <Link href="/">Mecury Marketplace</Link>
          </SheetTitle>
          <SheetDescription className="text-lg text-gray-400">
            Browse Linklet
          </SheetDescription>
        </SheetHeader>
        <Separator />
        <nav className="flex flex-col flex-1 gap-3 py-6 px-3 text-4xl text-[#e0e1dd]">
          <Link
            href="/store"
            className="transition-colors hover:bg-[#e0e1dd] hover:text-[#1B263B] rounded-md px-2 py-3"
          >
            Store
          </Link>
          <Link
            href="/list/manage"
            className="transition-colors hover:bg-[#e0e1dd] hover:text-[#1B263B] rounded-md px-2 py-3"
          >
            Listings
          </Link>
          <Link
            href="/university"
            className="transition-colors hover:bg-[#e0e1dd] hover:text-[#1B263B] rounded-md px-2 py-3"
          >
            Universities
          </Link>
        </nav>
        <Separator />
        <div className="flex py-6 gap-4 px-5 text-4xl items-center">
          <SignedOut>
            <div className="flex gap-x-3">
              <Link href="/sign-in">
                <button className="iconButton">
                  <span className="tooltip text-md hover:text-white transition-colors">
                    Sign In
                  </span>
                </button>
              </Link>

              <Link href="/sign-up">
                <button className="iconButton">
                  <span className="tooltip text-md hover:text-white transition-colors">
                    Sign Up
                  </span>
                </button>
              </Link>
            </div>
          </SignedOut>
          {/*  TODO: allow for interactivity in mobile */}
          <SignedIn>
            <UserButton showName />
          </SignedIn>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
