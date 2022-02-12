import { Suspense } from 'react';
import type { Item } from '@/types/types';

import Spinner from '@/components/Spinner';

import Story from '@/components/Story.client';
import Layout from '@/components/Layout.client';

import useData from '@/lib/use-data';
import fetchData from '@/lib/fetch-data';

export type CSRPageProps = {};

function StoryWithData({ id }: { id: string }) {
  const data = useData<Item>(`s-${id}`, () => fetchData(`item/${id}`));
  return <Story item={data} />;
}

function NewsWithData() {
  const storyIds = useData<string[]>('top', () => fetchData('topstories'));
  return (
    <>
      {storyIds.slice(0, 30).map(id => {
        return (
          <Suspense key={id} fallback={<Spinner />}>
            <StoryWithData id={id} />
          </Suspense>
        );
      })}
    </>
  );
}

function CSRPage(props: CSRPageProps) {
  return (
    <Layout title="CSR" description="Hacker News API: Top Stories(30)">
      <Suspense fallback={<Spinner />}>
        <NewsWithData />
      </Suspense>
    </Layout>
  );
}

export default CSRPage;
