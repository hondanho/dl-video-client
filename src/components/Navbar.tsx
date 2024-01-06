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
// import Image from 'next/image'

const Language = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  const onSelectChange = (locale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  };

  return (
    <Dropdown className="float-left rounded">
      <DropdownTrigger>
        <Button variant="bordered" className="font-weight-600 border-primary">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 640 512"
            aria-label="Switcher language"
            color="white"
            className="bg-primary text-2xl text-white"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9 8.4 6.4 17.1 12.5 26.1 18 5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3-12.6-7.8-24.5-16.1-35.4-24.9-10.9 8.7-22.7 17.1-35.4 24.9-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2 9.3-5.7 18-11.7 26.1-18-7.9-8.4-14.9-17-21-25.7-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9 7.3-4.3c5.4-3.2 12.4-1.7 16 3.4 5 7 10.8 14 17.4 20.9 13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24zm58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9z"></path>
          </svg>
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
            <span className={`sprite ${item.languageIcon}`}></span>{item.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
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

  return (
    <header className="h-fit w-full">
      <nav
        ref={navbarRef}
        className={cn(
          "z-[999] w-full items-center justify-between bg-primary",
          "flex flex-col md:flex-row md:px-4 pt-[10px] pb-[10px]",
          openNav ? "shadow-none" : "shadow-sm"
        )}
      >
        <div className="container flex w-full items-center justify-between px-4">
          {/* Logo */}
          <a href="/">
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
              <h1 className="font-weight-600 text-xl font-extrabold">
                {" "}
                Download Video <span className="text-[#3BDF70]">Online</span>
              </h1>
            </div>
          </a>
          <Language />
        </div>
        {/* Desktop */}

        {/* Mobile Nav */}
        {openNav && <Language />}
      </nav>
    </header>
  );
};

export async function getServerSideProps() {
  return {
    props: {}
  };
}

export default Navbar;
