"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { SvgBurger, SvgCareLogo, SvgCart, SvgLogo } from "../(svg)/AllSvg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import CartDropdown from "../cart/(components)/CartDropdown";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const pathname = usePathname();

  const onCloseNodalHandler = () => {
    setMobileMenuOpen(false);
  };

  const onOpenCartModalHandler = () => {
    setCartModalOpen(true);
  };
  const onCloseCartModalHandler = () => {
    setCartModalOpen(false);
  };

  return (
    <header className="mb-5 bg-white lg:mb-0">
      <nav
        className="flex items-center justify-between pl-7 mx-auto max-w-7xl lg:px-8 lg:py-5"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <SvgLogo />
          </a>
        </div>

        <div className="flex lg:hidden">
          <Link href="/cart" className="px-6 py-3 scale-animation">
            <SvgCart />
          </Link>
          <button
            type="button"
            className="-mt-2.5 relative inline-flex items-center justify-center rounded-md pt-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <SvgBurger />
          </button>
        </div>
        <div className="hidden text-base font-medium lg:flex lg:gap-x-12 text-gray-01">
          <Link
            href="/"
            className={classNames(
              "w-[70px] hover:text-primary-01 hover:font-semibold transition-all duration-200",
              {
                "text-primary-01 font-semibold": pathname === "/",
              }
            )}
          >
            Головна
          </Link>
          <Link
            href="/catalog"
            className={classNames(
              "w-[70px] hover:text-primary-01 hover:font-semibold transition-all duration-200",
              {
                "text-primary-01 font-semibold": pathname.includes("/catalog"),
              }
            )}
          >
            Каталог
          </Link>
          <Link
            href="/about-us"
            className={classNames(
              "w-[70px] hover:text-primary-01 hover:font-semibold transition-all duration-200",
              {
                "text-primary-01 font-semibold": pathname === "/about-us",
              }
            )}
          >
            Про нас
          </Link>
        </div>
        <div className="hidden gap-4 lg:flex lg:flex-1 lg:justify-end">
          <button
            onClick={onOpenCartModalHandler}
            className="px-6 py-3 border-2 border-primary-01 rounded-[48px] scale-animation"
          >
            <SvgCart />
          </button>
          <CartDropdown
            open={cartModalOpen}
            onClose={onCloseCartModalHandler}
          />
          <a href="/#stepper" className="btn-primary scale-animation">
            Як це працює?
          </a>
        </div>
      </nav>

      <Transition appear show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="lg:hidden" onClose={onCloseNodalHandler}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 translate-x-1"
            enterTo="opacity-100 translate-x-0"
            leave="ease-out duration-200"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-1"
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary-01 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-start justify-between pl-5">
                <Link
                  href="/"
                  className="pt-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <SvgCareLogo className="text-light-blue" />
                </Link>
                <button
                  type="button"
                  className="-mt-2.5 rounded-md pt-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <SvgBurger />
                </button>
              </div>
              <div className="flow-root px-5 mt-6">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="pb-4 space-y-2 text-light-blue">
                    <Link
                      href="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className={classNames(
                        "block rounded-lg px-4 py-2 text-base font-semibold leading-7 scale-animation hover:bg-primary-02",
                        {
                          "bg-primary-02": pathname === "/",
                        }
                      )}
                    >
                      Головна
                    </Link>
                    <Link
                      href="/catalog"
                      onClick={() => setMobileMenuOpen(false)}
                      className={classNames(
                        "block rounded-lg px-4 py-2 text-base font-semibold leading-7 scale-animation hover:bg-primary-02",
                        {
                          "bg-primary-02": pathname.includes("/catalog"),
                        }
                      )}
                    >
                      Каталог
                    </Link>
                    <Link
                      href="/about-us"
                      onClick={() => setMobileMenuOpen(false)}
                      className={classNames(
                        "block rounded-lg px-4 py-2 text-base font-semibold leading-7 scale-animation hover:bg-primary-02",
                        {
                          "bg-primary-02": pathname === "/about-us",
                        }
                      )}
                    >
                      Про нас
                    </Link>
                    <Link
                      href="/cart"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2 text-base font-semibold leading-7 rounded-lg scale-animation hover:bg-primary-02"
                    >
                      Корзина
                    </Link>
                    <Link
                      href="/about-us"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2 text-base font-semibold leading-7 rounded-lg scale-animation hover:bg-primary-02"
                    >
                      Особистий кабінет
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
}
