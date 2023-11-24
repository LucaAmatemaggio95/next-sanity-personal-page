"use client";
import { Page } from "@/types/page";
import { Dialog, Popover } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  pages: Page[];
};

const Navbar = ({ pages }: Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false); // Close the navigation panel
  }, [pathname]);

  return (
    <header className="border-b-2 border-slate-100 sticky top-0 z-10 backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <div className="rounded-xl bg-gradient-to-r p-1 from-green-500 via-teal-600 to-blue-950">
            <div className="flex flex-col justify-between bg-white text-white rounded-lg px-2">
              <Link href="/" className="bg-white rounded-lg mx-1.5 py-1">
                <span className="bg-gradient-to-r from-green-500 via-teal-600 to-blue-950 bg-clip-text text-transparent text-lg font-bold">
                  Home
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {pages.map((page) => (
            <Link
              key={page._id}
              href={`/${page.slug}`}
              className="font-semibold hover:bg-slate-100 px-3 py-2 rounded-lg"
            >
              {page.title}
            </Link>
          ))}
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-8 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex justify-end">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 flex flex-col">
                {pages.map((page) => (
                  <Link
                    key={page._id}
                    href={`/${page.slug}`}
                    className="font-semibold hover:bg-slate-100 px-3 py-2 rounded-lg"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
