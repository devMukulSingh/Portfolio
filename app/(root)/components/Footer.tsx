"use client";
import { useAppDispatch } from "@/redux/hooks/hook";
import { useEffect, useRef } from "react";
import { setContactRef } from "@/redux/rootReducer";
import { contactLinks, profileLinks } from "@/lib/constants";


export default function Footer() {
  const dispatch = useAppDispatch();
  const contactRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    dispatch(setContactRef(contactRef));
  }, []);
  return (
    <div
      id="contactPage"
      className="
    flex 
    items-center  
    border-white 
    bg-slate-300 
    text-black 
    w-full 
    justify-center
    h-[15rem]
    "
      ref={contactRef}
    >
      <ContactLinks />
    </div>
  );
}

function ContactLinks() {

  return (
    <div
      // initial={{opacity:0,y:150}}
      // whileInView={{ opacity:1, y:0}}
      // transition={{ duration:0.5,ease:'easeInOut'}}
      className="grid grid-cols-2 gap-5 "
    >
      <div className="space-y-4">
        {profileLinks.map((contact, index) => (
          <a
            key={index}
            className="hover:underline flex gap-3 items-center text-sm sm:text-md"
            href={contact.link}
            target="_blank"
          >
            <contact.icon className="flex-shrink-0" size={25} />
            {contact.title}
          </a>
        ))}
      </div>
      <div className="space-y-4">
        {contactLinks.map((contact, index) => (
          <a
            key={index}
            className="hover:underline flex gap-3 items-center text-sm sm:text-md"
            href={contact.link}
            target="_blank"
          >
            <contact.icon className="flex-shrink-0" size={25} />
            {contact.link}
          </a>
        ))}
      </div>
    </div>
  );
}
