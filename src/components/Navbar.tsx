"use client";
import { useTransition, useState, useEffect, useRef } from "react";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,

} from "@nextui-org/react";
import { cn } from "@/utils";
import { localeNames, usePathname, useRouter } from "@/utils/navigation";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import IconButton from "./ui/IconButton";

const Language = () => {
  const router = useRouter();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const [language, setLanguage] = useState<string>(locale);

  const onSelectChange = (locale: string) => {
    setLanguage(locale);
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  };

  return (
    <Dropdown className="float-left rounded">
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="font-weight-bold border-primary text-white gap-1 p-0"
        >
          <span className={`sprite sprite-nav ${localeNames.find((x) => x.value === language)?.languageIcon ?? 'english'}`}></span>
          {(<span>{localeNames.find((x) => x.value === language)?.name}</span>)}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="flat"
        style={{ maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}
        aria-label="Static Actions"
        items={localeNames}
      >
        {localeNames.map((item, index) => (
          <DropdownItem
            key={index}
            onClick={() => onSelectChange(item.value)}
            color={"default"}
          >
            <span className={`sprite ${item.languageIcon}`}></span>
            {item.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const [openSubmenu, setOpenSubmenu] = useState(false); // Add state for submenu
  const t = useTranslations("Footer");
  const page = useTranslations("Page");
  const locale = useLocale();

  // Close Mobile Nav if screen size is bigger than 768
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 768 && setOpenNav(false)
    );
  }, []);

  // Close Mobile Nav on click outside Navbar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setOpenNav(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
  }, []);


  const navbarLinks = [
    {
      name: page("download-facebook-video.title"),
      href: `/${locale}/download-facebook-video`
    },
    {
      name: "More",
      href: "#"
    }
  ];

  const subNavbarLinks = [
    {
      name: page("download-facebook-reels.title"),
      href: `/${locale}/download-facebook-reels`
    },
    {
      name: page("download-youtube-video.title"),
      href: `/${locale}/download-youtube-video`
    },
    {
      name: page("download-youtube-shorts.title"),
      href: `/${locale}/download-youtube-shorts`
    },
    {
      name: page("download-instagram-video.title"),
      href: `/${locale}/download-instagram-video`
    },
    {
      name: page("download-instagram-reels.title"),
      href: `/${locale}/download-instagram-reels`
    },
    {
      name: page("download-tiktok-video.title"),
      href: `/${locale}/download-tiktok-video`
    },
    {
      name: page("download-twitter-video.title"),
      href: `/${locale}/download-twitter-video`
    },
    {
      name: page("download-twitch-video.title"),
      href: `/${locale}/download-twitch-video`
    },
    {
      name: page("download-twitch-clip.title"),
      href: `/${locale}/download-twitch-clip`
    }
  ];

  return (
    <header className="h-fit bg-primary">
      <nav
        ref={navbarRef}
        className={cn(
          "z-[999] w-full items-center justify-between  flex container",
          // "flex flex-col pb-[10px] pt-[10px] md:flex-row md:px-4",
          openNav ? "shadow-none" : "shadow-sm"
        )}
      >
        <div className="flex items-center justify-between px-4">
          {/* Logo */}
          <Link href="/">
            <div
              aria-label="Logo"
              className={cn(
                "font-weight-600 flex select-none items-center gap-1 py-2 text-white"
              )}
            >
              {/* <Image
                  src={"/images/icons8-download-windows-metro-32.png"}
                  width={19}
                  height={19}
                  alt="logo"
                /> */}
              <div className="font-weight-600 text-xl font-extrabold">
                {" "}
                Download Video <span className="text-[#3BDF70]">Online</span>
              </div>
            </div>
          </Link>
          <div className="flex ml-32 gap-4 hidden md:flex navbar-link">
            {navbarLinks.map((link) => {
              if (link.name === "More") {
                return (
                  <div className="py-4 relative">
                    <Link key={link.name}
                      href="#"
                      title="more"
                      id="more"
                      className="p-4 relative navbar-more"
                      onMouseEnter={() => setOpenSubmenu(true)}
                      onMouseLeave={() => setOpenSubmenu(false)}
                    >
                      {link.name}
                    </Link>
                    {openSubmenu && (
                      // {true && (
                      <div className="z-[999] hidden md:flex absolute" style={{ whiteSpace: "nowrap", left: "-194px" }}>
                        <div
                          onMouseEnter={() => setOpenSubmenu(true)}
                          onMouseLeave={() => setOpenSubmenu(false)}
                          className={cn(
                            "full-top  flex flex-col items-start gap-1 rounded shadow-md py-2",
                            "animate-[fade-in_0.2s_ease-in-out_1] bg-white"
                          )}
                        >
                          {subNavbarLinks.map((linkSub) => {
                            return (
                              <Link
                                title={linkSub.name}
                                key={linkSub.name}
                                href={linkSub.href}
                                className="w-full rounded px-4 py-1 text-left font-light text-black submenu-item"
                              >
                                {linkSub.name}
                              </Link>
                            )

                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }
              return (
                <Link
                  key={link.name}
                title={link.name}
                href={link.href}
                  className="py-4"
                >
                  {link.name}
                </Link>
              )
            })}
          </div>
        </div>

        <Language />

        {/* Mobile Nav Button */}
        <IconButton
          onClick={() => setOpenNav(!openNav)}
          className="p-1 md:hidden"
        >
          <span className="text-2xl">
            {openNav ?
              <span className="text-2xl">
                <svg stroke="white" fill="white" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z">
                  </path>
                </svg>
              </span>
              :
              <svg stroke="white" fill="white" strokeWidth="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" >
                </path>
              </svg>
            }
          </span>
        </IconButton>
      </nav>

      {/* Mobile Nav */}
      {openNav && <div className="relative z-[999] w-full md:hidden">
        <div
          className={cn(
            "full-top absolute flex w-full flex-col items-start gap-1 rounded-b p-2 shadow-md",
            "animate-[fade-in_0.2s_ease-in-out_1] bg-white"
          )}
        >
          {subNavbarLinks.map((link) => (
            <Link
              key={link.name}
              title={link.name}
              href={link.href}
              onClick={() => setOpenNav(false)}
              className="w-full rounded bg-gray-50 px-4 py-2 text-center text-lg font-light text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>}
    </header>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default Navbar;
