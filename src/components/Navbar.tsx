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
import { useLocale } from "next-intl";

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
          className="font-weight-bold border-primary text-white gap-1"
        >
          <span className={`sprite sprite-nav ${localeNames.find((x) => x.value === language)?.languageIcon ?? 'english'}`}></span>
          {localeNames.find((x) => x.value === language)?.name}
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
          "flex flex-col pb-[10px] pt-[10px] md:flex-row md:px-4",
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
    props: {},
  };
}

export default Navbar;
