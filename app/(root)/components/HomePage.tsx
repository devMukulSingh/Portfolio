import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex items-center gap-5 h-[calc(100vh-5rem)]">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-semibold">FULL STACK developer</h1>
        <h1 className="text-lg">
          Hi 🖐️ I am Mukul Singh Bisht. <br />A passionate MERN and Next js
          developer
        </h1>
      </div>
      <figure
        className="
          relative
          w-[15rem]
          h-[15rem]
        "
      >
        <Image
          className="object-contain rounded-full"
          fill
          src={"/profile.jpg"}
          alt="profilePic"
        />
      </figure>
    </div>
  );
};

export default HomePage;
