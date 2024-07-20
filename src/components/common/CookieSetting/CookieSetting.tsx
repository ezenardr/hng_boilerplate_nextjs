import Link from "next/link";
import React from "react";

import CustomButton from "~/components/common/Button/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Switch } from "~/components/ui/switch";

function CookieSetting() {
  // list of cookies options
  const cookies = [
    {
      id: 1,
      title: "Strictly necessary",
      description:
        "These cookies are essential for the website to function properly. They enable basic functions like page navigation, secure login, and access to protected areas of the site. Without these cookies, the website cannot perform properly.",
      alwaysActive: true,
    },
    {
      id: 2,
      title: "Performance cookies",
      description:
        "These cookies are essential for the website to function properly. They enable basic functions like page navigation, secure login, and access to protected areas of the site. Without these cookies, the website cannot perform properly.",
      alwaysActive: false,
    },
    {
      id: 3,
      title: "Functionality cookies",
      description:
        "These cookies are essential for the website to function properly. They enable basic functions like page navigation, secure login, and access to protected areas of the site. Without these cookies, the website cannot perform properly.",
      alwaysActive: false,
    },
    {
      id: 4,
      title: " Targeting cookies",
      description:
        "These cookies are essential for the website to function properly. They enable basic functions like page navigation, secure login, and access to protected areas of the site. Without these cookies, the website cannot perform properly.",
      alwaysActive: false,
    },
  ];
  return (
    // To be replaced by the global modal component
    <CookieSettingModal>
      <div
        className={
          "scrollbar-hide z-50 flex h-[90%] w-[90%] flex-col gap-10 overflow-y-scroll rounded-[20px] bg-white p-6 lg:w-[791px] lg:p-10"
        }
      >
        {/*  first*/}
        <div className={"flex flex-col gap-6 px-3 text-justify lg:px-6"}>
          <h3 className={"text-2xl font-bold text-neutral-dark-1"}>
            Customize cookies
          </h3>
          <p className={"text-[16px] font-normal text-neutral-dark-1"}>
            Cookies are small text files that are stored on your device when you
            visit websites. They are used to remember information about you,
            such as your login details, preferences, and browsing history.
            Cookies help enhance your browsing experience by allowing websites
            to remember your actions and preferences over time, ensuring that
            you don’t have to re-enter information each time you visit a site.
            They also help website owners analyze traffic and user behavior to
            improve their services. Read our{" "}
            <Link href={"/"} className={"text-primary"}>
              Privacy Policy
            </Link>{" "}
            for more details
          </p>
        </div>
        {/*second*/}
        <div className={"flex flex-col px-3 lg:px-6"}>
          {cookies.map(({ id, description, alwaysActive, title }) => {
            return (
              <div className={"grid grid-cols-3 items-center"} key={id}>
                <Accordion
                  type="single"
                  collapsible
                  className={"col-start-1 col-end-3"}
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>{title}</AccordionTrigger>
                    <AccordionContent
                      className={"text-[16px] text-neutral-dark-1"}
                    >
                      {description}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                {alwaysActive ? (
                  <span
                    className={
                      "py-4 text-right text-[16px] text-neutral-dark-1"
                    }
                  >
                    Always Enabled
                  </span>
                ) : (
                  <div className={"justify-self-end"}>
                    <Switch />
                  </div>
                )}
              </div>
            );
          })}
          <div className={"mt-4 flex justify-end"}>
            <CustomButton variant={"primary"} size={"lg"}>
              Save & Accept
            </CustomButton>
          </div>
        </div>
      </div>
    </CookieSettingModal>
  );
}

export default CookieSetting;

// temporary modal for styling purpose. Remove before merging with the global modal component
function CookieSettingModal({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        "fixed left-0 top-0 z-20 flex h-dvh w-screen items-center justify-center bg-neutral-dark-2 opacity-40"
      }
    >
      {children}
    </div>
  );
}
