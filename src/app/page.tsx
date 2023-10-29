import { Article, ArticleCard } from '~/components/article';

export default function Home() {
  return (
    <>
      <ArticleCard>
        <Article
          title="Preview Next.js 14"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, fuga quod eveniet blanditiis commodi obcaecati consequuntur autem pariatur eligendi laborum cum quasi voluptatem est neque numquam explicabo rerum placeat error."
          category="Front-end"
          date="October 26, 2023"
          image="/"
          readTime="2"
          href="/id"
        />
      </ArticleCard>
      <Pagination />
    </>
  );
}

const Pagination = () => {
  return (
    <div className="mb-8 mx-auto flex gap-4 justify-center">
      <Button>Prev</Button>
      <button className="bg-white px-5 py-2 rounded-lg text-slate-600 font-semibold border-2 border-slate-500">
        1
      </button>
      <Button>2</Button>
      <Button>Next</Button>
    </div>
  );
};

const Button = ({ children }: { children?: React.ReactNode }) => {
  return (
    <button className="bg-red-400 px-5 py-2 rounded-lg text-white font-semibold border-2 border-slate-500">
      {children}
    </button>
  );
};
