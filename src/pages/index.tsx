import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="pt-10">
      <section className="py-10">
        <div className="max-w-5xl mx-auto my-0">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Prepare React 18
          </h1>
        </div>
      </section>
      <section className="py-10 bg-slate-100">
        <div className="max-w-5xl mx-auto my-0">
          <h2 className="text-3xl font-bold text-slate-700">
            <a href="/os" target="_blank" rel="noopener noreferrer">
              Middleware
            </a>
          </h2>
        </div>
      </section>
      <section className="py-10">
        <div className="max-w-5xl mx-auto my-0">
          <h2 className="text-3xl font-bold text-slate-700">
            SSR Streaming(Alpha)
          </h2>
        </div>
      </section>
      <h2>React Server Components(Alpha)</h2>
      <h2>Server Components APIs(Alpha)</h2>
    </div>
  );
};

export default Home;
