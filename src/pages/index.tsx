import type { NextPage } from 'next';

import LinkSection from '@/components/LinkSection.client';

import config from '../../next.config';

const Home: NextPage = () => {
  return (
    <div className="pt-10">
      <section className="p-10">
        <div className="max-w-5xl mx-auto my-0">
          <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Prepare React 18
          </h1>
        </div>
      </section>
      <LinkSection
        odd
        disabled
        href="/user-agent"
        title="Middleware"
        description="Not possible mode(concurrentFeatures mode)"
      />
      <LinkSection
        href="/ssr"
        title="SSR"
        target="_blank"
        rel="noopener noreferrer"
      />
      <LinkSection
        odd
        href="/ssg"
        title="SSG"
        target="_blank"
        rel="noopener noreferrer"
      />
      <LinkSection
        href="/csr"
        title="CSR Suspense(Alpha)"
        target="_blank"
        rel="noopener noreferrer"
      />
      <LinkSection
        odd
        href="/rsc"
        title="RSC(Alpha)"
        target="_blank"
        rel="noopener noreferrer"
      />
      <LinkSection
        href="/rsc/myPage"
        title="RSC - 2"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  );
};

export default Home;
