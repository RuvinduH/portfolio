import Card from "@/components/Card";
import CardHeader from "@/components/CardHeader";
import SectionHeader from "@/components/SectionHeader";
import ToolboxItems from "@/components/ToolboxItems";
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
import Image from "next/image";

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

const SkillsSection = () => {
  return (
    <section id="skills" className="scroll-mt-20 lg:scroll-mt-20 xl:scroll-mt-24">
      <div className="container xl:max-w-[1500px]">
        <SectionHeader
          eyebrow="Skills & Certifications"
          title="What I Bring to the Table"
          description="From cloud foundations to modern development frameworks, these are the tools and credentials that drive my work."
        />
        <div className="mt-10 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-y-8 md:gap-8">
            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Skills"
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
                        className="size-20 xl:size-24"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
