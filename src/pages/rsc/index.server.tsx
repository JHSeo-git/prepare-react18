import { Suspense } from 'react';
import type { Item } from '@/types/types';

import Skeletions from '@/components/Skeletions';

import Story from '@/components/Story.client';
import Layout from '@/components/Layout.client';

import ServerInfo from '@/components/ServerInfo.server';

import useData from '@/lib/use-data';
import fetchData from '@/lib/fetch-data';

function StoryWithData({ id }: { id: string }) {
  const data = useData<Item>(`s-${id}`, () => fetchData(`item/${id}`));
  return <Story item={data} />;
}

function NewsWithData() {
  const storyIds = useData<string[]>('top', () => fetchData('topstories', 500));
  return (
    <>
      {storyIds.slice(0, 30).map(id => {
        return <StoryWithData key={id} id={id} />;
      })}
    </>
  );
}

export type RSCPageProps = {};

function RSCPage(props: RSCPageProps) {
  return (
    <Layout title="RSC" description="Hacker News API: Top Stories(30)">
      <ServerInfo />
      <Suspense fallback={<Skeletions count={30} />}>
        <NewsWithData />
      </Suspense>
    </Layout>
  );
}

export default RSCPage;
