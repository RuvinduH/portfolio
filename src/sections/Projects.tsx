import groceryStoreProject from "@/assets/images/grocery-price-project.png";
import reytsAdminDashboardProject from "@/assets/images/reyts-admin-dashboard-project.png";
import minecraftVillageProject from "@/assets/images/mc-project.png";
import minecraftEncryptionProjecct from "@/assets/images/mc-encryption-project.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    year: "2023",
    company: "RMIT",
    title: "Grocery Price Scout App",
    description: [
      {
        title:
          "Full-stack grocery app: browse, compare, buy — React + Spring Boot (BFF, REST)",
      },
      {
        title:
          "Secured & deployed: JWT/Spring Security; Docker → AWS (ECR, Elastic Beanstalk)",
      },
    ],
    tech: [
      "Java",
      "React",
      "Spring Boot",
      "SQLite",
      "Docker",
      "AWS (ECR, EB)",
      "JWT",
      "CSS",
      "Git",
      "Agile Scrum",
      "Postman",
    ],
    link: "https://drive.google.com/file/d/11q2Ks9S2IlP6MeHwwyCczedH9invFHl7/view?usp=drive_link",
    image: groceryStoreProject,
  },
  {
    year: "2024",
    company: "Reyts Fintech Inc",
    title: "Fullstack Dashboard App",
    description: [
      {
        title:
          "Real-time dashboard: responsive, on-brand UI with modern layouts, advanced filters, and dynamic summary widgets",
      },
      {
        title:
          "Live data & delivery: backend API integration for real-time transactions; robust tests and zero-downtime deploys",
      },
    ],
    tech: ["Vue.js", "REST APIs", "CSS", "Git", "Agile Scrum"],
    link: "",
    image: reytsAdminDashboardProject,
  },
  {
    year: "2023",
    company: "RMIT",
    title: "MC - Village Generator",
    description: [
      {
        title:
          "Python procedural generator for Minecraft villages (houses, farms, roads, lamps) that adapts to any terrain/map",
      },
      {
        title:
          "Realistic layouts & speed: Gaussian-blur terrain smoothing + A* pathfinding; multithreaded for faster runtime",
      },
    ],
    tech: [
      "Python",
      "RaspberryJuice API",
      "MCPI",
      "Multi-threading",
      "A* Algorithm",
      "Git",
    ],
    link: "https://drive.google.com/file/d/1Y1Sc9wozEv2hd38HCK7T8uG7EaYkuTcq/view?usp=sharing",
    image: minecraftVillageProject,
  },
  {
    year: "2022",
    company: "RMIT",
    title: "CCA Secure Connection",
    description: [
      {
        title:
          "CCA-resistant Encrypt-then-MAC protocol for Minecraft; integrated with Python MCPI client and Java server plugin",
      },
      {
        title:
          "Crypto stack: RSA-2048 (OAEP) for encryption + HMAC-SHA256 for integrity; handles encrypted payloads end-to-end",
      },
    ],
    tech: [
      "Java",
      "Python",
      "RSA",
      "HMAC",
      "Burp Suite",
      "Wireshark",
      "Spigot",
      "RaspberryJuice",
    ],
    link: "",
    image: minecraftEncryptionProjecct,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="py-16 lg:py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Technical Showcase"
          title="Featured Projects"
          description="From secure protocols to full-stack apps, here are some of the
          projects that shaped my skills"
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              className="p-5 h-[560px] md:h-[775px] lg:h-[570px] xl:h-[710px] md:py-12 md:px-10 lg:py-14 lg:px-10 sticky top-16 md:top-24 lg:top-32 xl:top-36"
            >
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-r from-my-emerald to-my-sky inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text gap-2">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="mt-4 md:mt-5 space-y-3">
                    {project.description.map((result) => (
                      <li
                        key={result.title}
                        className="flex items-start gap-3 text-sm md:text-base leading-relaxed text-white/70"
                      >
                        <CheckCircleIcon
                          className="
                        h-5 w-5
                        md:h-6 md:w-6
                        shrink-0
                        text-my-emerald
                        mt-0.5
                      "
                        />
                        <span className="block">{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  {project.link && project.link.trim() !== "" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>View Demo</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  )}
                </div>
                <div className="flex flex-col justify-center lg:col-span-2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 rounded-xl lg:mt-0"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
