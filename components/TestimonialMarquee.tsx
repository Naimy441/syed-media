/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sarah Ahmed",
    username: "@sarahahmed",
    body: "Video editing service transformed my content! The attention to detail is unmatched.",
    img: "https://avatar.vercel.sh/sarahahmed",
  },
  {
    name: "Mohammed Khan",
    username: "@mkhan",
    body: "Professional photography exceeded expectations. Quality and expertise are outstanding!",
    img: "https://avatar.vercel.sh/mkhan",
  },
  {
    name: "Fatima Ali",
    username: "@fatimaali",
    body: "Social media management doubled my engagement rates. Game-changing results!",
    img: "https://avatar.vercel.sh/fatimaali",
  },
  {
    name: "James Wilson",
    username: "@jwilson",
    body: "Website design service created a stunning, user-friendly site for my brand.",
    img: "https://avatar.vercel.sh/jwilson",
  },
  {
    name: "Aisha Patel",
    username: "@aishapatel",
    body: "Content creation helped establish my brand voice perfectly. Highly recommend!",
    img: "https://avatar.vercel.sh/aishapatel",
  },
  {
    name: "David Chen",
    username: "@dchen",
    body: "SEO optimization significantly improved my website's ranking. Amazing results!",
    img: "https://avatar.vercel.sh/dchen",
  },
  {
    name: "Layla Hassan",
    username: "@laylahassan",
    body: "Brand identity design gave my business a fresh, modern look. Love it!",
    img: "https://avatar.vercel.sh/laylahassan",
  },
  {
    name: "Michael Brown",
    username: "@mbrown",
    body: "Digital marketing strategy helped me reach new audiences effectively.",
    img: "https://avatar.vercel.sh/mbrown",
  },
  {
    name: "Noor Khan",
    username: "@noorkhan",
    body: "Email marketing increased my conversion rates dramatically. Fantastic service!",
    img: "https://avatar.vercel.sh/noorkhan",
  },
  {
    name: "Emma Thompson",
    username: "@emmathompson",
    body: "Graphic design service created stunning visuals for my brand. Exceptional work!",
    img: "https://avatar.vercel.sh/emmathompson",
  },
  {
    name: "Omar Malik",
    username: "@omarmalik",
    body: "PPC advertising helped me reach my target audience effectively. Great ROI!",
    img: "https://avatar.vercel.sh/omarmalik",
  },
  {
    name: "Sophie Anderson",
    username: "@sophieanderson",
    body: "Content strategy transformed my online presence. Remarkable results!",
    img: "https://avatar.vercel.sh/sophieanderson",
  },
  {
    name: "Zain Ali",
    username: "@zainali",
    body: "Social media advertising reached new customers perfectly. Spot on targeting!",
    img: "https://avatar.vercel.sh/zainali",
  },
  {
    name: "Rachel Green",
    username: "@rachelgreen",
    body: "Influencer marketing connected me with perfect partners. Exceeded expectations!",
    img: "https://avatar.vercel.sh/rachelgreen",
  },
  {
    name: "Ahmed Hassan",
    username: "@ahmedhassan",
    body: "Analytics service gave me valuable business insights. Gold standard reporting!",
    img: "https://avatar.vercel.sh/ahmedhassan",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(reviews.length / 4, (reviews.length / 4) * 3);
const fourthRow = reviews.slice(reviews.length / 3, (reviews.length / 3) * 2).concat(reviews.slice(0, reviews.length / 3));
const fifthRow = reviews.slice(reviews.length / 6, (reviews.length / 6) * 5);
const sixthRow = reviews.slice(reviews.length / 5, (reviews.length / 5) * 4).concat(reviews.slice(0, reviews.length / 5));

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function TestimonialMarquee() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="fixed inset-0 z-0"
    >
      <div className="relative flex h-full w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
        <div
          className="flex flex-row items-center gap-4 md:gap-8"
          style={{
            transform:
              "translateX(50px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
          }}
        >
          <Marquee pauseOnHover vertical className="[--duration:60s] hidden md:block">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:120s]" vertical>
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:120s]" vertical>
            {thirdRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:120s]" vertical>
            {fourthRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:120s] hidden md:block" vertical>
            {fifthRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:120s] hidden md:block" vertical>
            {sixthRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />
      </div>
    </motion.div>
  );
} 