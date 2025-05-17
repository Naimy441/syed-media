/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Michelle Rivers",
    body: "Syed Media completely transformed the way I promote my boutique. Their marketing membership gives me new strategies every month, and my sales have never been better!",
    img: "https://avatar.vercel.sh/michellerivers",
  },
  {
    name: "Bilal Syed",
    body: "I never thought I’d actually make money as an affiliate, but Syed Media proved me wrong. It’s simple, and the commission checks keep coming. Perfect side hustle.",
    img: "https://avatar.vercel.sh/bilalsyed",
  },
  {
    name: "LocalArtist Alex",
    body: "I used Syed Media’s editing services for my art videos, and they made my work look incredible. Super clean, engaging, and they understood my brand perfectly.",
    img: "https://avatar.vercel.sh/localartistalex",
  },
  {
    name: "The Real Mark P",
    body: "Joining Syed Media's marketing membership was the best decision I made this year. Their strategies are fresh, and the growth I've seen on my social platforms is unreal. Highly recommend to any business owner!",
    img: "https://avatar.vercel.sh/therealmarkp",
  },
  {
    name: "Social Savvy 23",
    body: "Honestly, the affiliate program is a game-changer. I thought it was just another referral thing, but Syed Media actually cares about helping affiliates earn. I've made solid commissions already!",
    img: "https://avatar.vercel.sh/socialsavvy23",
  },
  {
    name: "Jazzi Vibes",
    body: "Crazy how much better my videos look after working with Syed Media! I gave them a bunch of clips, and they turned it into a super polished, engaging reel. Total game-changer for my content!",
    img: "https://avatar.vercel.sh/jazzivibes",
  },
  {
    name: "Hero Blendz",
    body: "I've tried a few marketing agencies, but Syed Media actually gets local businesses. Their membership isn’t just fluff – it's packed with practical tips and personal support. My sales have gone up 30% in two months.",
    img: "https://avatar.vercel.sh/heroblendz",
  },
  {
    name: "Movito EZInvest",
    body: "Joined the affiliate program thinking it was just some side hustle. Didn’t expect to actually make a couple hundred bucks a month with barely any effort. Pretty solid.",
    img: "https://avatar.vercel.sh/movitoinvestements",
  },
  {
    name: "Micheal Brown",
    body: "I used Syed Media's editing services for my fitness brand, and they nailed the vibe! Professional, quick turnaround, and they really know how to keep the energy in a video.",
    img: "https://avatar.vercel.sh/michealbrown",
  },
  {
    name: "Thompson 9880",
    body: "Syed Media has taken my bar’s social media to the next level. The membership gave me access to strategies I didn't even know I needed. More customers, better engagement. Worth every penny.",
    img: "https://avatar.vercel.sh/thompson9880",
  },
  {
    name: "Tony Martinez",
    body: "As an affiliate, don’t expect it to be easy. Finding clients is hard asf but the $150 per month isn’t cap. It’s legit.",
    img: "https://avatar.vercel.sh/tonymartinez",
  },
  {
    name: "Bee Boss99",
    body: "Editing skills are top-notch. I sent them a long, boring Zoom recording, and they turned it into an engaging highlight reel for my coaching business. Worth the $50.",
    img: "https://avatar.vercel.sh/beeboss99",
  },
  {
    name: "Hustle Harder 85",
    body: "I’ve been in the affiliate program for three months and already made more than I expected. Super easy to get started, and I love how transparent they are with payouts.",
    img: "https://avatar.vercel.sh/hustleharder85",
  },
  {
    name: "Sarah Simplicity",
    body: "Love the way they edited my product videos! They even added perfect background music and animations that made my brand look high-end. Definitely a great investment.",
    img: "https://avatar.vercel.sh/sarahsimplicity",
  },
  {
    name: "Davey 91",
    body: "Not gonna lie, I was skeptical, but Syed Media’s marketing membership is fire. I used to struggle with social content ideas, now I’m a pro at it.",
    img: "https://avatar.vercel.sh/davey91",
  },
  {
    name: "Dr. Siddique",
    body: "Professional, reliable, and innovative. Syed Media transformed my brand’s social presence. Highly recommend their membership for serious business owners.",
    img: "https://avatar.vercel.sh/drsiddique",
  },
  {
    name: "Airavata yt",
    body: "Sent them my music video to edit, and they crushed it! The transitions, effects, and audio sync were flawless. My fans love it.",
    img: "https://avatar.vercel.sh/airavatayt",
  },
  {
    name: "Nola preneur",
    body: "Running a small bakery is tough, but Syed Media’s marketing membership helped me stay consistent on social media. I actually get customers telling me they saw my videos!",
    img: "https://avatar.vercel.sh/nolapreneur",
  },
  {
    name: "Moez trades",
    body: "Being part of the Syed Media membership is like having a personal marketing coach. My brand’s Instagram has grown faster in three months than it did all last year.",
    img: "https://avatar.vercel.sh/moeztrades",
  },
  {
    name: "EstateQueenKelly",
    body: "I’m an affiliate with Syed Media, and their program is so easy. They give you all the tools you need to earn commissions, and I’ve already made a couple of hundred bucks.",
    img: "https://avatar.vercel.sh/realestatequeenkelly",
  },
  {
    name: "Chris Fanatics",
    body: "Needed a quick highlight reel for my sports channel, and Syed Media came through with insane quality. Editing was on point, and they delivered faster than expected.",
    img: "https://avatar.vercel.sh/chrisfanatics",
  },
  {
    name: "Sofia Designs",
    body: "Syed Media’s editing skills are top-tier. They turned my simple fashion videos into cinematic masterpieces. I don’t trust anyone else now.",
    img: "https://avatar.vercel.sh/sofiadesigns",
  },
  {
    name: "Rizq Jassal",
    body: "I was new to affiliate marketing, but Syed Media’s program is so straightforward. I’m already seeing passive income, and their support is amazing.",
    img: "https://avatar.vercel.sh/rizqjassal",
  },
  {
    name: "James Wilson",
    body: "I do comedy skits, and Syed Media’s editing just makes them pop. They get the humor and add the perfect effects. Love working with them.",
    img: "https://avatar.vercel.sh/jameswilson",
  },
  {
    name: "Hacker Bob",
    body: "I joined the affiliate program just for fun, but it’s actually become a nice side income. They pay on time and the commission is fair.",
    img: "https://avatar.vercel.sh/hackerbob",
  },
  {
    name: "Emily James",
    body: "I used their editing service for my cooking videos, and wow… they made me look like a pro. Clean cuts, smooth transitions, and they know how to keep viewers engaged.",
    img: "https://avatar.vercel.sh/emilyjames",
  },
  {
    name: "Justin B",
    body: "My gaming channel was struggling until Syed Media’s team started editing my highlights. The quality is insane, and I’m finally getting views.",
    img: "https://avatar.vercel.sh/justinb",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(reviews.length / 4, (reviews.length / 4) * 3);
const fourthRow = reviews.slice(reviews.length / 3, (reviews.length / 3) * 2).concat(reviews.slice(0, reviews.length / 3));
const fifthRow = reviews.slice(reviews.length / 6, (reviews.length / 6) * 5);

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-48 cursor-pointer overflow-hidden rounded-xl border p-4",
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
            {name.replaceAll(" ", "_")}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40"></p>
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
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:120s]" vertical>
            {secondRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:120s]" vertical>
            {thirdRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:120s]" vertical>
            {fourthRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:120s] hidden md:block" vertical>
            {fifthRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
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