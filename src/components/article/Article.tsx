import React from 'react';
import Badge from '../ui/Badge';
import Link from 'next/link';

interface ArticleProps {
  title: string;
  body: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  href: string;
}

export default function Article(props: ArticleProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <ArticleImage />

      <div className="flex-1">
        <div className="flex items-center gap-2 mb-4">
          <Badge>{props.category}</Badge>
          <p className="text-sm ml-3">{props.date}</p>
          <span className="text-red-400">&bull;</span>
          <p className="text-sm">{props.readTime} mins read</p>
        </div>

        <ArticleTitle>
          <Link href={props.href}>{props.title}</Link>
        </ArticleTitle>
        <ArticleBody>{props.body}</ArticleBody>

        <Link href={props.href}>
          <ArticleButton />
        </Link>
      </div>
    </div>
  );
}

const ArticleImage = () => {
  return (
    <div className="bg-gray-200 rounded-md w-full h-[200px] md:w-[200px] border-2 border-slate-500" />
  );
};

const ArticleTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="font-bold text-3xl mb-4 transition-all ease-in-out duration-200 hover:underline">
      {children}
    </h1>
  );
};

const ArticleBody = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-slate-500 mb-4">{children}</p>;
};

const ArticleButton = () => {
  return (
    <button className="rounded-full border-2 border-slate-400 px-6 py-2 font-semibold text-sm transition-all duration-200 hover:shadow-lg">
      Continue reading
    </button>
  );
};
