import NextLink from 'next/link';
import type { NextPage } from 'next';
import config from '../../next.config';

const Home: NextPage = () => {
  const isPossibleMiddleware = !!!config.experimental?.concurrentFeatures;

  return (
    <div className="pt-10">
      <section className="p-10">
        <div className="max-w-5xl mx-auto my-0">
          <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Prepare React 18
          </h1>
        </div>
      </section>
      <section className="p-10 bg-slate-100">
        <div className="max-w-5xl mx-auto my-0">
          <h2 className="text-2xl font-bold text-slate-700 hover:text-slate-800 active:text-slate-900">
            <NextLink href="/user-agent" passHref>
              <a
                className={
                  isPossibleMiddleware
                    ? 'pointer-events-auto'
                    : 'pointer-events-none text-slate-500'
                }
              >
                Middleware
              </a>
            </NextLink>
            {!isPossibleMiddleware && (
              <p className="text-sm text-slate-400">
                <em>Not possible mode(concurrentFeatures mode)</em>
              </p>
            )}
            {/* <a href="/user-agent" target="_blank" rel="noopener noreferrer"></a> */}
          </h2>
        </div>
      </section>
      <section className="p-10">
        <div className="max-w-5xl mx-auto my-0">
          <h2 className="text-2xl font-bold text-slate-700 hover:text-slate-800 active:text-slate-900">
            <a href="/ssr" target="_blank" rel="noopener noreferrer">
              SSR Streaming(Alpha)
            </a>
          </h2>
        </div>
      </section>
      <section className="p-10 bg-slate-100">
        <div className="max-w-5xl mx-auto my-0">
          <h2 className="text-2xl font-bold text-slate-700 hover:text-slate-800 active:text-slate-900">
            <a href="/rsc" target="_blank" rel="noopener noreferrer">
              React Server Components(Alpha)
            </a>
          </h2>
        </div>
      </section>
      <section className="p-10">
        <div className="max-w-5xl mx-auto my-0">
          <h2 className="text-2xl font-bold text-slate-700 hover:text-slate-800 active:text-slate-900">
            <a href="/sca" target="_blank" rel="noopener noreferrer">
              Server Components APIs(Alpha)
            </a>
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Home;
