"use client";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import Image from "next/image";
import awsCCPImage from "@/assets/images/aws-ccp.png";
import JavaIcon from "@/assets/icons/java.svg";
import PythonIcon from "@/assets/icons/python.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextJSIcon from "@/assets/icons/nextjs.svg";
import VueIcon from "@/assets/icons/vue.svg";
import TailwindCSSIcon from "@/assets/icons/tailwindcss.svg";
import SpringBootIcon from "@/assets/icons/spring-boot.svg";
import NodeJSIcon from "@/assets/icons/nodejs.svg";
import MavenIcon from "@/assets/icons/maven.svg";
import PostgreSQLIcon from "@/assets/icons/postgresql.svg";
import MySQLIcon from "@/assets/icons/mysql.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import AWSIcon from "@/assets/icons/aws.svg";
import GithubIcon from "@/assets/icons/github.svg";
import PostmanIcon from "@/assets/icons/postman.svg";
import mapImage from "@/assets/images/map-2.png";
import smileMemoji from "@/assets/images/memoji-smile-2.png";
import CardHeader from "@/components/CardHeader";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useBreakpoint, type BP } from "@/hooks/useBreakpoint";

// ----- optional existing data you already had -----
const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    image: awsCCPImage,
    link: "https://www.credly.com/badges/3338c5f0-e52f-4eac-973e-07300d113460/public_url",
  },
];

const toolboxItems = [
  // Languages & Core Web
  { title: "Java", iconType: JavaIcon },
  { title: "Python", iconType: PythonIcon },
  { title: "JavaScript", iconType: JavaScriptIcon },
  { title: "TypeScript", iconType: TypeScriptIcon },
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CSSIcon },

  // Frontend
  { title: "React", iconType: ReactIcon },
  { title: "Next.js", iconType: NextJSIcon },
  { title: "Vue.js", iconType: VueIcon },
  { title: "Tailwind CSS", iconType: TailwindCSSIcon },

  // Backend & Runtime
  { title: "Spring Boot", iconType: SpringBootIcon },
  { title: "Node.js", iconType: NodeJSIcon },
  { title: "Maven", iconType: MavenIcon },

  // Databases & Caching
  { title: "PostgreSQL", iconType: PostgreSQLIcon },
  { title: "MySQL", iconType: MySQLIcon },

  // DevOps, Cloud & Tools
  { title: "Docker", iconType: DockerIcon },
  { title: "AWS", iconType: AWSIcon },
  { title: "GitHub", iconType: GithubIcon },
  { title: "Postman", iconType: PostmanIcon },
];

type Pos = { left: string; top: string };
type PosByBP = Partial<Record<BP, Pos>>;

function pickPos(pos: PosByBP, bp: BP): Pos {
  return (
    pos[bp] ??
    pos.lg ??
    pos.md ??
    pos.sm ??
    pos.base ?? { left: "0%", top: "0%" }
  );
}

const education: Array<{
  title: string;
  institution: string;
  graduated: string;
  score: string;
  pos: PosByBP;
}> = [
  {
    title: "Victorian Certificate of Education",
    institution: "Lakeview Senior College",
    graduated: "2021",
    score: "95.55 ATAR",
    pos: {
      base: { left: "14%", top: "49%" },
      sm: { left: "14%", top: "0%" },
      md: { left: "20%", top: "47%" },
      lg: { left: "51%", top: "10%" },
      xl: { left: "56%", top: "10%" },
    },
  },
  {
    title: "Bachelor of Computer Science",
    institution: "RMIT University",
    graduated: "March 2025",
    score: "3.3 GPA",
    pos: {
      base: { left: "14%", top: "0%" },
      sm: { left: "14%", top: "49%" },
      md: { left: "20%", top: "0%" },
      lg: { left: "4%", top: "10%" },
      xl: { left: "10%", top: "10%" },
    },
  },
];

export const AboutSection = () => {
  const constrainRef = useRef<HTMLDivElement | null>(null);
  const bp = useBreakpoint();

  return (
    <section
      id="about"
      className="py-20 lg:py-28 -scroll-mt-10 lg:-scroll-mt-16"
    >
      <div className="container xl:max-w-[1500px]">
        <SectionHeader
          eyebrow="About Me"
          title="A Little More About Me"
          description="A quick snapshot of my background and my base of operations"
        />

        <div className="mt-12 flex flex-col gap-8">
          <div className="flex justify-center"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-y-8 md:gap-8">
            {/* Education card */}
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Education"
                description="My academic journey that has brought me here"
                className="px-5 py-5"
              />
              <div className="relative flex-1" ref={constrainRef}>
                {education.map((edu) => {
                  const { left, top } = pickPos(edu.pos, bp);
                  return (
                    <motion.div
                      key={edu.title}
                      className="inline-flex flex-col items-center text-center gap-1 px-4 py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-my-emerald to-my-sky rounded-full absolute w-[250px] lg:w-[320px] text-gray-950"
                      style={{ left, top }}
                      drag
                      dragConstraints={constrainRef}
                    >
                      <h5 className="font-bold text-xs lg:text-base">
                        {edu.title}
                      </h5>
                      <p className="text-[10px] lg:text-sm">
                        <span className="font-semibold">Institution: </span>
                        <span>{edu.institution}</span>
                      </p>
                      <p className="text-[10px] lg:text-sm">
                        <span className="font-semibold">Graduated: </span>
                        <span>{edu.graduated}</span>
                      </p>
                      <p className="text-[10px] lg:text-sm">
                        <span className="font-semibold">Score: </span>
                        <span>{edu.score}</span>
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </Card>

            {/* Map / memoji card */}
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
                priority
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 xl:-translate-y-1/2 size-20 xl:size-24 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full -z-20 bg-gradient-to-r from-my-emerald to-my-sky animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full -z-10 bg-gradient-to-r from-my-emerald to-my-sky"></div>
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-20 xl:size-24"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
