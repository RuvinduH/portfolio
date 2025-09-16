import memojiImage from "@/assets/images/memoji-computer-3.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import HeroOrbit from "@/components/HeroOrbit";
import ScrollButton from "@/components/ScrollButton";

export const HeroSection = () => {
  return (
    <div className="py-[104px] md:py-[168px] lg:py-[216px] xl:py-[356px] relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] xl:[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_80%,transparent)] -z-10">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="hero-ring size-[680px]"></div>
        <div className="hero-ring size-[880px]"></div>
        <div className="hero-ring size-[1080px]"></div>
        <div className="hero-ring size-[1280px]"></div>
        <div className="hero-ring size-[1480px]"></div>
        <div className="hero-ring size-[1680px]"></div>
        <div className="hero-ring size-[1880px]"></div>
        <div className="hero-ring size-[2080px]"></div>
        <div className="hero-ring size-[2280px]"></div>
        <div className="hero-ring size-[2480px]"></div>
        <div className="hero-ring size-[2680px]"></div>
        <HeroOrbit
          size={1800}
          rotation={-69}
          shouldOrbit
          orbitDuration="68s"
          shouldSpin
          spinDuration="10s"
        >
          <StarIcon className="size-44 text-my-emerald" />
        </HeroOrbit>
        <HeroOrbit
          size={1450}
          rotation={-10}
          shouldOrbit
          orbitDuration="66s"
          shouldSpin
          spinDuration="10s"
        >
          <StarIcon className="size-40 text-my-emerald" />
        </HeroOrbit>
        <HeroOrbit
          size={1400}
          rotation={110}
          shouldOrbit
          orbitDuration="64s"
          shouldSpin
          spinDuration="10s"
        >
          <StarIcon className="size-36 text-my-emerald" />
        </HeroOrbit>
        <HeroOrbit
          size={1400}
          rotation={-60}
          shouldOrbit
          orbitDuration="62s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-16 text-my-emerald/20" />
        </HeroOrbit>
        <HeroOrbit
          size={1300}
          rotation={160}
          shouldOrbit
          orbitDuration="60s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-16 text-my-emerald/20" />
        </HeroOrbit>
        <HeroOrbit size={1250} rotation={130} shouldOrbit orbitDuration="58s">
          <div className="size-3 rounded-full bg-my-emerald/20" />
        </HeroOrbit>
        <HeroOrbit
          size={1200}
          rotation={-30}
          shouldOrbit
          orbitDuration="56s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-my-emerald/20" />
        </HeroOrbit>
        <HeroOrbit size={1150} rotation={-70} shouldOrbit orbitDuration="54s">
          <div className="size-3 rounded-full bg-my-emerald/20" />
        </HeroOrbit>
        <HeroOrbit
          size={1000}
          rotation={180}
          shouldOrbit
          orbitDuration="52s"
          shouldSpin
          spinDuration="10s"
        >
          <StarIcon className="size-32 text-my-emerald" />
        </HeroOrbit>
        <HeroOrbit size={1000} rotation={150} shouldOrbit orbitDuration="50s">
          <div className="size-3 rounded-full bg-my-emerald/20" />
        </HeroOrbit>
        <HeroOrbit
          size={807}
          rotation={-73.3}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="10s"
        >
          <StarIcon className="size-28 text-my-emerald" />
        </HeroOrbit>
        <HeroOrbit
          size={712}
          rotation={145.5}
          shouldOrbit
          orbitDuration="46s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-my-emerald/20" />
        </HeroOrbit>
        <HeroOrbit size={708} rotation={86} shouldOrbit orbitDuration="44s">
          <div className="size-3 rounded-full bg-my-emerald/20" />
        </HeroOrbit>
        <HeroOrbit size={640} rotation={-6} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-my-emerald/20" />
        </HeroOrbit>
        <HeroOrbit
          size={580}
          rotation={99.5}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="10s"
        >
          <StarIcon className="size-8 text-my-emerald" />
        </HeroOrbit>
        <HeroOrbit
          size={539}
          rotation={179.4}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-my-emerald/20" />
        </HeroOrbit>
        <HeroOrbit
          size={536}
          rotation={19.2}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="10s"
        >
          <StarIcon className="size-12 text-my-emerald" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-43} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-my-emerald/20" />
        </HeroOrbit>
        <HeroOrbit
          size={430}
          rotation={80}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-my-emerald/20" />
        </HeroOrbit>
        <HeroOrbit
          size={423}
          rotation={-16.3}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-my-emerald/20" />
        </HeroOrbit>
      </div>
      <div className="container z-30">
        <div className="flex flex-col items-center">
          <p className="text-center lg:text-lg">
            “Hey, I’m{" "}
            <span className="uppercase font-semibold bg-gradient-to-r from-my-emerald to-my-sky bg-clip-text text-transparent">
              Ruvindu Hewage
            </span>
            ”
          </p>
          <Image
            src={memojiImage}
            className="size-[100px] lg:size-[120px]"
            alt="Person peeking from behind the laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Ready for new adventures 🚀
            </div>
          </div>
        </div>
        <div className="max-w-[595px] mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-6 md:mt-7 tracking-wide">
            Designing Systems That Perform & Experiences That Last
          </h1>
          <p className="text-white/60 text-center mt-4 md:text-lg">
            I specialise in turning complex problems into simple, elegant
            solutions
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-7 md:mt-11 gap-4">
          <ScrollButton
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
            scrollToId="experience"
          >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </ScrollButton>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl ">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
