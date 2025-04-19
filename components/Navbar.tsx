"use client";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const navItems = [
    {
      title: "Home",
    },
    {
      title: "Skills",
    },
    {
      title: "Projects",
    },
    {
      title: "Certificates",
    },
    {
      title: "Contact",
    },
  ];

  const handleClick = (title: string) => {
    switch (title) {
      case "Home":
        document
          .getElementById("homePage")
          ?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Contact":
        document.getElementById("contactPage")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });

        break;
      case "Skills":
        document.getElementById("skillsPage")?.scrollIntoView({
          behavior: "smooth",
          inline: "start",
        });
        break;
      case "Projects":
        document
          .getElementById("projectsPage")
          ?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Certificates":
        document
          .getElementById("certificatesPage")
          ?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  const handleSidebar = () => {
    setSidebar((prev) => !prev);
  };
  return (
    <>
      <div className="hidden sm:flex h-20 gap-5 items-center p-5 fixed top-0 bg-slate-200 w-full justify-center  z-40">
        {navItems.map((navItem, index) => (
          <h1
            onClick={() => handleClick(navItem.title)}
            className="cursor-pointer hover:drop-shadow-2xl hover:shadow-black"
            key={index}
          >
            {navItem.title}
          </h1>
        ))}
      </div>

      {/* <motion.nav animate={sidebar ? "open" : "closed"} variants={variants}> */}
      <div className="flex sm:hidden items-center bg-slate-200 h-20 px-5 fixed top-0 w-full z-40">
        <Menu onClick={handleSidebar} className="sm:hidden flex" />
      </div>
      <div
        className={`
      ${!sidebar ? "hidden" : "flex"}
      transition-transform
      z-40
      flex 
      flex-col 
      sm:hidden 
      gap-5
      h-full
      fixed
      pl-5
      pr-20
      mt-20
      w-fit
      bg-slate-200 
      `}
      >
        {navItems.map((navItem, index) => (
          <h1
            onClick={() => handleClick(navItem.title)}
            className="cursor-pointer hover:drop-shadow-2xl hover:shadow-black"
            key={index}
          >
            {navItem.title}
          </h1>
        ))}
      </div>
      {/* </motion.nav> */}
    </>
  );
};

export default Navbar;
