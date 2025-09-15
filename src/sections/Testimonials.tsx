import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Card from "@/components/Card";

const testimonials = [
  {
    name: "Jay Shah",
    position: "Technical Lead @ Westpac - Managed Ruvindu directly",
    text: "Ruvindu is a great guy to work with, he is always on time for his deliveries and works on the tasks assigned to him with the best of his abilities. One of my favourite qualities about Ruvindu is that he tries to apply all his expertise for every task he picks up and always give his 100% no matter what. He is leaving my team for the reasons out of my control but would have loved to keep him on for as long as possible.",
    avatar: memojiAvatar1,
  },
  {
    name: "Rishabh Sharma",
    position: "Senior Developer @ Westpac - Worked with Ruvindu",
    text: "I worked with Ruvindu on upgrading various Java applications to improve security and undertake major framework upgrades. He is an excellent team player who consistently delivered high quality and efficient code. He always tries to find better ways of doing things by adopting new tools and technologies. I highly recommend Ruvindu for any software development role.",
    avatar: memojiAvatar3,
  },
  {
    name: "Triet Lai",
    position: "Technical Lead @ Westpac - Worked with Ruvindu",
    text: "I have worked with Ruvindu for several months on Snyk project, during this time, he has quickly had a good grasp on the Compass Online Banking applications, demonstrating a strong ability to learn, adapt, and grow in a short period. His independent work style and solid knowledge in Maven, Java, JSP and JavaScript etc. has enabled him to address many security vulnerabilities successfully and efficiently. Dedicated and focused, he consistently met deadlines, ensuring the applications remain secure and reliable for our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Sanket Kumar",
    position: "Backend Developer @ Westpac - Worked with Ruvindu",
    text: "I’ve had the pleasure of working with Ruvindu on the Compass application at Westpac, and it’s been a great experience. He’s not only a talented Java Developer with strong technical skills, but also a genuine team player who’s always ready to collaborate and support others. His positive attitude and commitment make a real difference, and I truly enjoy working alongside him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Teammates"
          title="What My Peers Say About Me"
          description="Don't just take my word for it. See what my peers say about my work"
        />
        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="max-w-xs md:max-w-md md:p-8"
              >
                <div className="flex gap-4 items-center">
                  <div className="relative size-20 lg:size-24 shrink-0 overflow-hidden rounded-full bg-gray-700">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold md:text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-sm md:text-base text-white/40">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm md:text-base text-center">
                  {testimonial.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
