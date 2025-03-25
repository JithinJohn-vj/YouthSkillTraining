"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AnimatedHamburgerButton } from "@repo/ui/components/HamMenu";
import { MaxWidthWrapper } from "@repo/ui/components/MaxWidthWrapper";
import Image from "next/image";
export const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header>
      {/* sub header */}
      <section className="bg-primary-blue">
        <MaxWidthWrapper>
          <div className="flex justify-between items-center py-0.5">
            <div onClick={() => setOpen(!open)} className={``}>
              <AnimatedHamburgerButton open={open} />
            </div>
            <div>
              <Image
                src="/header/person.svg"
                height={25}
                width={25}
                alt="personLogo"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* main header */}
      <section>df</section>
    </header>
  );
};
