"use client";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import React from "react";
import { cn } from "@/lib/utils";

const genres: { title: string; href: string }[] = [
  {
    title: "Pop",
    href: "/explore?filter=pop",
  },
  {
    title: "Rock",
    href: "/explore?filter=rock",
  },
  {
    title: "Hip Hop",
    href: "/explore?filter=hip-hop",
  },
  {
    title: "R&B",
    href: "/explore?filter=rnb",
  },
  {
    title: "Country",
    href: "/explore?filter=country",
  },
  {
    title: "Electronic",
    href: "/explore?filter=electronic",
  },
  {
    title: "Jazz",
    href: "/explore?filter=jazz",
  },
  {
    title: "Classical",
    href: "/explore?filter=classical",
  },
  {
    title: "Metal",
    href: "/explore?filter=metal",
  },
  {
    title: "Folk",
    href: "/explore?filter=folk",
  },
  {
    title: "Blues",
    href: "/explore?filter=blues",
  },
  {
    title: "Punk",
    href: "/explore?filter=punk",
  },
  {
    title: "Indie",
    href: "/explore?filter=indie",
  },
  {
    title: "Soul",
    href: "/explore?filter=soul",
  },
  {
    title: "Reggae",
    href: "/explore?filter=reggae",
  },
  {
    title: "K-Pop",
    href: "/explore?filter=k-pop",
  },
  {
    title: "Funk",
    href: "/explore?filter=funk",
  },
  {
    title: "Disco",
    href: "/explore?filter=disco",
  },
  {
    title: "House",
    href: "/explore?filter=house",
  },
  {
    title: "Techno",
    href: "/explore?filter=techno",
  },
];

export default function Navbar({ children }) {
  return (
    <NavigationMenu className='flex justify-between p-2 border-b max-w-none '>
      <NavigationMenuList className='flex'>
        <NavigationMenuItem>
          <Link href='/'>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              (Logo)
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/explore'>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Explore
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Genres</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] grid-cols-2 gap-3 p-4 md:w-[500px] sm:grid-cols-4 lg:w-[600px] '>
              {genres.map((genre) => (
                <ListItem
                  key={genre.title}
                  title={genre.title}
                  href={genre.href}></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>

      {/* End Section */}
      <NavigationMenuList className='flex gap-2'>
        <NavigationMenuItem>
          <Input type='text' placeholder='Search...'></Input>
        </NavigationMenuItem>
        <NavigationMenuItem>{children}</NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuItem>
            <Button>Sign in</Button>
          </NavigationMenuItem>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuViewport></NavigationMenuViewport>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
