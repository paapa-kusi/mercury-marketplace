"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components = [
  {
    title: "Create a Listing",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "How to List",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Alternative Shipping",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Something 3",
    href: "/docs/primitives/scroll-area",
    description: "Lorem Ipsum",
  },
  {
    title: "Something 1",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Something 2",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function Navbar() {
  return (
    <NavigationMenu delayDuration={75}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-normal">
            Store
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-3xl xl:w-4xl h-[350px] lg:grid-cols-[.5fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/store#featured"
                  >
                    <div className="mb-0 mt-4 text-2xl font-medium">
                      Featured Listings
                    </div>
                    <p className="text-md leading-tight text-muted-foreground">
                      Today's hottest selling items
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/store" title="Storefront" className="h-[100px]">
                Visit the catalog of currently listing materials
              </ListItem>
              <ListItem
                href="/store/universities"
                title="Shop Universities"
                className="h-[100px]"
              >
                View listings by their associated university
              </ListItem>
              <ListItem
                href="/store/professors"
                title="Shop Professors"
                className="h-[100px]"
              >
                Search for listings from specific professors
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-normal">
            Listings
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-3xl xl:w-4xl h-[350px] gap-3 p-4 md:grid-cols-2">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="h-[100px]"
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              University
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = ({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none font-normal space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-lg font-normal leading-none">{title}</div>
          <p className="line-clamp-2 text-md leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";
