import { certificates, TCertificate } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function CertificatesPage() {
  return (
    <div
      id="certificatesPage"
      className="
      flex 
      flex-col 
      gap-20
      items-center 
      w-full 
      min-h-screen 
      justify-center
      py-10
      "
    >
      <h1
        className="
        text-4xl
        sm:text-5xl
        font-semibold
        "
      >
        Certificates/Achievements
      </h1>
      <ul
        className="
        grid
        lg:grid-cols-2
        grid-cols-1
        list-decimal
        gap-10
      "
      >
        {certificates.map((cert, index) => (
          <Certificate cert={cert} key={index} />
        ))}
      </ul>
    </div>
  );
}

type Props = {
  cert: TCertificate;
};

function Certificate({ cert }: Props) {
  return (
    // <motion.div>
    <li className="">
      <Link className="space-y-2" href={cert.siteLink} target="_">
        <h1 className="text-xl sm:text-2xl font-semibold">{cert.title}</h1>
        <figure
          className="
        relative
        w-[27rem]
        h-[20rem]
        shadow-md
        shadow-white
        hover:scale-95
        transition-all
        duration-500
        hover:shadow-2xl
        hover:shadow-cyan-300
        "
        >
          <Image src={cert.imgSrc} alt="cert" fill className="object-cover" />
        </figure>
      </Link>
    </li>
    // </motion.div>
  );
}
