import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";

const experiences = [
  {
    company: "Westpac Banking Corporation",
    position: "Software Developer",
    year: "APR 2024 – PRESENT",
    contract: "Full-time",
    mode: "Hybrid",
    location: "Melbourne, Australia",
    tech: [
      "Java 8-17",
      "Spring MVC",
      "Maven",
      "Jenkins",
      "Splunk",
      "FreeMarker",
      "Node.js",
      "JUnit/Mockito",
    ],
    achievement: [
      {
        title:
          "Resolved 1,300+ Snyk vulnerabilities across 15 applications; ensured ISG-compliance; criticals near-zero",
      },
      {
        title:
          "Modernised enterprise & customer-facing platforms (Struts→Spring, Spring 4→5, Node 14→20)",
      },
      {
        title:
          "Migrated 200+ Velocity templates to FreeMarker with integration tests—faster, more reliable releases",
      },
    ],
  },
  {
    company: "Singh & Sons Enterprise Pty Ltd",
    position: "Software Developer",
    year: "JUL 2023 – JAN 2024",
    contract: "Contract",
    mode: "Remote",
    location: "Melbourne, Australia",
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "SQLite",
      "JWT",
      "JUnit/Mockito",
      "Chart.js",
      "SMTP",
    ],
    achievement: [
      {
        title:
          "Delivered a secure full-stack payroll & sales platform (Spring Boot REST + React + SQLite) with JWT + RBAC",
      },
      {
        title:
          "Built an Excel import pipeline (parsers/validators → normalized tables + audit logs) — zero data-entry defects post-launch",
      },
      {
        title:
          "Added KPI dashboards and weekly email reports (Chart.js, shadcn/ui)",
      },
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience">
      <div className="container lg:max-w-6xl xl:max-w-7xl">
        <SectionHeader
          eyebrow="Real-World Results"
          title="My Professional Experiences"
          description="Highlights from my professional journey—where I contributed to modernising enterprise systems, building secure applications, and delivering measurable impact."
        />
        <div className="mt-10 md:mt-20 lg:grid lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col gap-10 lg:contents">
            {experiences.map((experience) => (
              <Card
                key={experience.company}
                className="p-5 md:py-12 md:px-10 lg:py-14 lg:px-14 sticky top-20 md:top-32 md:h-[435px] lg:h-[525px]"
              >
                <p
                  className="bg-gradient-to-r from-my-emerald to-my-sky font-bold tracking-widest text-sm
               bg-clip-text text-transparent whitespace-nowrap uppercase"
                >
                  {experience.year}
                </p>

                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                  {experience.position}
                </h3>
                <p className="text-sm font-semibold md:text-base text-white/40">
                  {experience.company}
                </p>
                <div className="inline-flex gap-1 mt-1">
                  <span className="bg-gradient-to-r from-my-emerald to-my-sky text-sm font-semibold text-gray-950 inline-flex items-center rounded-xl px-1.5 ">
                    {experience.location}
                  </span>
                  <span className="bg-gradient-to-r from-my-emerald to-my-sky text-sm font-semibold text-gray-950 inline-flex items-center rounded-xl px-1.5 ">
                    {experience.contract}
                  </span>
                  <span className="bg-gradient-to-r from-my-emerald to-my-sky text-sm font-semibold text-gray-950 inline-flex items-center rounded-xl px-1.5">
                    {experience.mode}
                  </span>
                </div>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="mt-4 md:mt-5 space-y-3">
                  {experience.achievement.map((result) => (
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
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
