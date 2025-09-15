import groceryStoreProject from "@/assets/images/grocery-price-project.png";
import reytsAdminDashboardProject from "@/assets/images/reyts-admin-dashboard-project.png";
import minecraftVillageProject from "@/assets/images/mc-project.png";
import minecraftEncryptionProjecct from "@/assets/images/mc-encryption-project.png";
import Image from "next/image";
import CheckCirleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    year: "2023",
    company: "RMIT",
    title: "Grocery Price Scout App",
    description: [
      {
        title:
          "Developed a full-stack application for browsing, comparing, and purchasing groceries",
      },
      {
        title:
          "Built React frontend integrated with Spring Boot microservices using Backend-for-Frontend (BFF) and REST APIs",
      },
      {
        title:
          "Enforced JWT and Spring Security for authentication; deployed using Docker on AWS Elastic Beanstalk and ECR",
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
          "Led the development of a real-time financial dashboard with a responsive and brand-aligned UI",
      },
      {
        title:
          "Implemented modern layouts and features, while adding advanced filters and dynamic financial summary widgets, integrating backend APIs to fetch real-time transaction data",
      },
      {
        title:
          "Ensured robust testing and smooth deployment without disrupting ongoing operations",
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
          "Built a Python program that generates unique Minecraft villages (houses, farms, roads, lamps) that completely adapts to any environment or map",
      },
      {
        title:
          "Applied a Gaussian blur terrain smoothing and A* pathfinding for realistic road/bridge layouts",
      },
      {
        title:
          "Accelerated through multi-threading to significantly improve runtime performance",
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
          "Built a secure Encrypt-then-MAC communication protocol resistant to CCA attacks in Minecraft",
      },
      {
        title:
          "Used RSA (2048-bit, OAEP) with HMAC-SHA256 to ensure message integrity",
      },
      {
        title:
          "Integrated into Python MCPI client and Java server plugin to handle encrypted payloads",
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
    <section className="pb-16 lg:py-20">
      <div className="container">
        <div className="flex justify-center mt-6">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-my-emerald to-my-sky text-center bg-clip-text text-transparent">
            Technical Showcase
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
          From secure protocols to full-stack apps, here are some of the
          projects that shaped my skills
        </p>
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-8 after:pointer-events-none md:py-12 md:px-10 lg:py-14 lg:px-14"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-10">
                <div>
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
                        <CheckCirleIcon
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
                <div className="flex flex-col justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 rounded-xl lg:mt-0"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
