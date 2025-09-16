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
import MySQLIcon from "@/assets/icons/MySQL.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import AWSIcon from "@/assets/icons/aws.svg";
import GithubIcon from "@/assets/icons/github.svg";
import PostmanIcon from "@/assets/icons/postman.svg";
import mapImage from "@/assets/images/map-2.png";
import smileMemoji from "@/assets/images/memoji-smile-2.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const certifications = [
  {
    title: "AWS Certified Cloud Practioner",
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

const education = [
  {
    title: "Bachelor of Computer Science",
    institution: "RMIT University",
    graduated: "March 2025",
    score: "3.3 GPA",
  },
  {
    title: "Vicotrian Certificate of Education",
    institution: "Lakeview Senior College",
    graduated: "2021",
    score: "95.55 ATAR",
  },
];

const hobbies = [
  {
    title: "Basketball",
    emoji: "🏀",
    left: "5%",
    top: "5%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "55%",
    top: "5%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: "10%",
    top: "35%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "35%",
    top: "40%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "65%",
    top: "45%",
  },
  {
    title: "Volleyball",
    emoji: "🏐",
    left: "5%",
    top: "65%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constrainRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container xl:max-w-[1500px]">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, my qualifications and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-y-8 md:gap-8">
            <Card className="h-[320px] p-5 md:col-span-2 lg:col-span-1 md:p-4 lg:p-5">
              <CardHeader
                title="Certifications"
                description="Industry-recognised credentials that back my work"
              />
              <div className="flex justify-center mt-4">
                {certifications.map((certification) => (
                  <div key={certification.title}>
                    <a
                      href={certification.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={certification.image}
                        alt={certification.title}
                        className="size-24 xl:size-28"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="The technologies and tools I use to craft exceptional digital
                experiences"
                className="px-5 pt-5"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-left [animation-duration:90s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:45s]"
              />
            </Card>
          </div>
          <div className="flex justify-center">
            <Card className="h-[320px] md:h-fit md:w-fit p-5">
              <CardHeader
                title="Education"
                description="My academic journey that has brought me here"
              />
              <div className="md:grid md:grid-cols-2 md:items-center md:justify-center">
                {education.map((edu) => (
                  <div key={edu.title} className="mt-4 text-sm text-white/60">
                    <h5 className="font-bold text-base text-white">
                      {edu.title}:
                    </h5>
                    <p>Institution: {edu.institution}</p>
                    <p>Graduated: {edu.graduated}</p>
                    <p>Score: {edu.score}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-y-8 md:gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="My interests and hobbies beyond the digital realm"
                className="px-5 py-5"
              />
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-my-emerald to-my-sky rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
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
    </div>
  );
};
