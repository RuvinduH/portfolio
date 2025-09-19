import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/ruvindu-h-8241b1141",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-x-clip pointer-events-none">
      <div className="absolute h-[400px] w-[2100px] bottom-0 left-1/2 -translate-x-1/2 bg-my-emerald/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm xl:text-base flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40 text-center">
            &copy; 2025. Ruvindu Hewage. All rights reserved. Created using
            Next.js and Tailwind CSS
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((footer) => (
              <a
                href={footer.href}
                target="_blank"
                rel="noopener noreferrer"
                key={footer.title}
                className="inline-flex items-center gap-1.5 pointer-events-auto"
              >
                <span className="font-semibold">{footer.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
