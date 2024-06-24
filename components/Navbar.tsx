'use client'

import { useAppSelector } from "@/redux/hooks/hook";

const Navbar = () => {
    const navItems = [
      {
        title: "Home",
      },
      {
        title: "About",
      },
      {
        title: "Skills",
      },
      {
        title: "Projects",
      },
      {
        title: "Contact",
      },
    ];
    const {  aboutRef,contactRef,homeRef,projectRef,skillsRef} = useAppSelector(state => state);
    const handleClick = (title:string) => {
      switch (title) {
        case "Home":
          homeRef?.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "About":
          aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "Contact":
          contactRef?.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "Skills":
          skillsRef?.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "Projects":
          projectRef?.current?.scrollIntoView({ behavior: "smooth" });
          break;

        default:
          break;
      }
    }
  return (
    <div className='flex h-20 gap-5 items-center p-5 fixed top-0 bg-slate-200 w-full justify-center  z-40'>
        {
            navItems.map( (navItem,index) => (
                <h1
                    onClick={ () => handleClick(navItem.title) }
                    className='cursor-pointer hover:drop-shadow-2xl hover:shadow-black' 
                    key={index}>
                        {navItem.title}
                </h1>
            ))
        }
    </div>
  )
}

export default Navbar