import Link from 'next/link';
import React from 'react';

export default function Nav() {
  return (
    <header className="container">
      <nav className="bg-white border-2 border-slate-500 py-5 px-10 rounded-lg mt-5 mb-10 flex items-center justify-between">
        <Link href={'/'} className="text-4xl font-bold">
          SuryaDev
        </Link>

        <Link href={'/'}>Portfolio</Link>
      </nav>
    </header>
  );
}
