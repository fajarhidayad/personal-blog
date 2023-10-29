import React from 'react';
import Image from 'next/image';
import ProfileImg from '~/assets/img/surya-profile.jpeg';
import { Twitter, Github } from 'lucide-react';
import Link from 'next/link';
import Badge from '../ui/Badge';

export default function SidePage() {
  return (
    <aside className="space-y-16 mb-8">
      <SidePageCard title="About Me">
        <div className="flex items-center my-4">
          <div className="w-16 h-16 rounded-full bg-purple-400 border-2 border-slate-500 mr-4 overflow-hidden">
            <Image src={ProfileImg} alt="profile-img" className="scale-150" />
          </div>
          <div>
            <h3 className="font-semibold">Fajar Surya</h3>
            <p className="text-sm">Fullstack Developer</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-slate-600">
          Hi, I&apos;m a Fullstack Developer currently working as a freelancer
          with a focus on React or Next.js for frontend and Node.js or Golang
          for backend development.
        </p>
      </SidePageCard>
      <SidePageCard title="Recent Articles">
        <ul className="mt-5 space-y-6">
          <RecentArticle
            href="/id"
            title="Fullstack development with Next js 14 & Express"
            date="October 29, 2023"
          />
        </ul>
      </SidePageCard>
      <SidePageCard title="Social Media">
        <div className="mt-4 space-y-3">
          <SocialMediaLink
            link="https://twitter.com/surya_hidayad"
            title="@surya_hidayad"
          >
            <Twitter />
          </SocialMediaLink>
          <SocialMediaLink
            link="https://github.com/fajarhidayad"
            title="fajarhidayad"
          >
            <Github />
          </SocialMediaLink>
          <SocialMediaLink
            link="https://medium.com/@fajarhidayad"
            title="@fajar_hidayad"
          >
            M
          </SocialMediaLink>
        </div>
      </SidePageCard>
      <SidePageCard title="Tags">
        <div className="flex flex-wrap mt-4 gap-3">
          <Badge>Front-End</Badge>
          <Badge>Back-End</Badge>
          <Badge>Fullstack</Badge>
        </div>
      </SidePageCard>
    </aside>
  );
}

const SidePageCard = ({
  children,
  title,
}: {
  title: string;
  children?: React.ReactNode;
}) => {
  return (
    <section className="bg-yellow-100 border-2 border-slate-500 p-5 rounded-lg relative">
      <div className="bg-white text-xl font-semibold absolute border-2 border-slate-400 rounded-full px-4 py-2 -top-6">
        {title}
      </div>
      {children}
    </section>
  );
};

const SocialMediaLink = (props: {
  link: string;
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <Link href={props.link} className="flex items-center">
      <span className="bg-white w-10 h-10 rounded-full border-2 border-slate-500 flex items-center justify-center mr-3">
        {props.children}
      </span>
      <p className="font-semibold hover:underline">{props.title}</p>
    </Link>
  );
};

const RecentArticle = (props: {
  title: string;
  date: string;
  href: string;
}) => {
  return (
    <li className="flex gap-4">
      <div className="aspect-square bg-gray-200 rounded-lg w-20 border border-slate-500" />
      <div>
        <Link href={props.href} className="font-semibold hover:underline mb-2">
          {props.title}
        </Link>
        <p className="text-sm text-light">{props.date}</p>
      </div>
    </li>
  );
};
