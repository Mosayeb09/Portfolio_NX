import Image from "next/image";
const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className=" col-span-7 place-self-center">
          <h1 className="text-white text-2xl mb-4 md:text-3xl lg:text-6xl font-extrabold ">
            Hello, I`m Mosayeb Hossain
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            sunt optio minima, corporis unde ex laudantium est iusto sed. Sint
            eaque ducimus vero vitae suscipit quas maxime? Recusandae,
            voluptatibus perspiciatis.
          </p>
        </div>
        <div className=" col-span-5">
          <div className="rounded-full bg-[#181818] w-[250px] h-[300px] relative overflow-hidden pt-8">
            
            
            <div className="absolute w-[250px] h-[300px] transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <Image
                src="/images/Mosayeb_Hossain1.png"
                alt="hero-pfl"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
