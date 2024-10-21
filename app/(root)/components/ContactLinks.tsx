import { MailIcon, PhoneCall } from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { motion  } from "framer-motion";

const ContactLinks = () => {
  const contactLinks = [
    {
      icon: BsGithub,
      link: "https://github.com/devMukulSingh",
    },
    {
      icon: BsLinkedin,
      link: "https://linkedin.com/in/mukul-singh-bisht-36a80428b",
    },
    {
      icon: MailIcon,
      link: "mukulsingh2276@gmail.com",
    },
    {
      icon: PhoneCall,
      link: "+91 9808273072",
    },
  ];
  return (
    <motion.div
      initial={{opacity:0,y:150}}
      whileInView={{ opacity:1, y:0}}
      transition={{ duration:0.5,ease:'easeInOut'}}
      className="flex  flex-col gap-5">
      <h1 className="text-4xl sm:text-5xl font-semibold mb-10">Connect with me</h1>
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
    </motion.div>
  );
};

export default ContactLinks;
