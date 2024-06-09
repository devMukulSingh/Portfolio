import { MailIcon, PhoneCall } from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

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
    <div className="flex  flex-col gap-5">
      <h1 className="text-4xl font-medium mb-10">Connect with me</h1>
      {contactLinks.map((contact, index) => (
        <a
          key={index}
          className="hover:underline flex gap-3 items-center"
          href={contact.link}
          target="_blank"
        >
          <contact.icon size={25} />
          {contact.link}
        </a>
      ))}
    </div>
  );
};

export default ContactLinks;
