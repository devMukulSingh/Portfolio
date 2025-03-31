import { certificates, TCertificate } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CertificatesPage() {
  return (
    <div
      id="certificatesPage"
      className="
      flex 
      flex-col 
      gap-10 
      items-center 
      w-full 
      min-h-screen 
      justify-center
      "
    >
      <h1
        className="
        text-3xl
        sm:text-4xl
        font-semibold
        "
      >
        Certificates/Achievements
      </h1>
      <ul
        className="
        grid
        grid-cols-2
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
    <li className="">
      <Link className="space-y-2" href={cert.siteLink} target="_">
        <h1 className="text-xl font-semibold">{cert.title}</h1>
        <figure
          className="
        relative
        w-[35rem]
        h-[25rem]
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
  );
}
