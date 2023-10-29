import React from 'react';

export default function ArticleCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="border-2 border-slate-500 p-5 bg-white rounded-lg mb-8">
      {children}
    </article>
  );
}
