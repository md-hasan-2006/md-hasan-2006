'use client'
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandSnapchat,
  IconBrandThreads,
  IconBrandGmail
  
  
} from "@tabler/icons-react";
import Image from "next/image";



export function Link() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Instagram",
      icon: (
        <  IconBrandInstagram
        className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/jishanxhasan/",
    },
    {
      title: "facebook",
      icon: (
        < IconBrandFacebook 
        className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/profile.php?id=100086158287643",
    },
    {
        title: "Gmail",
        icon: (
          < IconBrandGmail 
          className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "mailto:mdjishanhasan442@gmail.com",
    },
    {
      title: "Threads",
      icon: (
        <IconBrandThreads className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.threads.net/@jishanxhasan",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/md_jishan_hasan",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/md-hasan-2006",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
