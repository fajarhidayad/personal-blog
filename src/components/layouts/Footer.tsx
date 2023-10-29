import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t-2 border-t-slate-500 bg-yellow-100">
      <section className="container py-5">
        <div>
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-4xl font-bold text-red-400 mt-8 mb-5">
              Subscribe to Newsletter
            </h1>
            <div className="rounded-full bg-white border-2 border-slate-500 flex items-center p-2 mb-5">
              <input
                placeholder="Enter your email address"
                className="flex-1 focus:outline-0 px-3"
              />
              <button className="bg-red-400 rounded-full border-2 border-slate-500 text-white font-semibold px-5 py-2">
                Submit
              </button>
            </div>
            <p className="text-sm mb-8">
              Get the latest news and articles to your inbox <br />
              delivered right to your email.
            </p>

            <p className="text-sm">
              &copy; Copyright {new Date().getFullYear()} Fajar Hidayad
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
