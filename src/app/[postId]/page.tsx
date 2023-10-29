import React from 'react';
import { ArticleCard } from '~/components/article';
import Badge from '~/components/ui/Badge';

function PostDetailsPage() {
  return (
    <>
      <ArticleCard>
        <section className="mb-8 mt-5">
          <h1 className="text-4xl font-semibold mb-5">Post Details Page</h1>
          <div className="mb-3 flex items-center gap-3 text-sm text-slate-500">
            <p>October 29, 2023</p>
            <span className="text-red-400">&bull;</span>
            <p>2 mins read</p>
          </div>
          <Badge>Frontend</Badge>
        </section>

        <section className="mb-8">
          <div className="bg-gray-200 rounded-lg aspect-video mb-3"></div>
          <p className="text-sm text-gray-500 text-center">Caption</p>
        </section>

        <section className="mb-8 px-10 font-light leading-loose">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            excepturi quaerat, illum consequuntur accusamus ipsa? Distinctio
            doloribus praesentium iste nesciunt accusamus sit tempore dolor vel,
            voluptatem temporibus vero possimus vitae fugiat natus nisi optio
            labore totam tenetur. Adipisci odit, quod incidunt modi repudiandae
            reprehenderit fuga ab illo autem. Temporibus, placeat.
          </p>
        </section>
      </ArticleCard>
    </>
  );
}

export default PostDetailsPage;
