'use client'
import { useAppDispatch } from "@/redux/hooks/hook";
import ContactForm from "./ContactForm"
import ContactLinks from "./ContactLinks"
import { useEffect, useRef } from "react";
import { setAboutRef, setContactRef } from "@/redux/rootReducer";


const ContactUsPage = () => {
  const dispatch = useAppDispatch();
  const contactRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    dispatch(setContactRef(contactRef));
  }, []);
  return (
    <div className="flex items-center l  border-white" ref={contactRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16  border-green-500">
        <ContactLinks />
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactUsPage