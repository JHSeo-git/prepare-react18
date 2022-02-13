import type { GetStaticProps } from 'next';
import type { Item } from '@/types/types';

import fetchData from '@/lib/fetch-data';

import Story from '@/components/Story.client';
import Layout from '@/components/Layout.client';

export const getStaticProps: GetStaticProps = async context => {
  const storyIds = await fetchData('topstories');
  const data = await Promise.all<Item[]>(
    storyIds.slice(0, 30).map((id: string) => fetchData(`item/${id}`))
  );

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
};

export type SSGPageProps = {
  data: Item[];
};

function SSGPage({ data }: SSGPageProps) {
  return (
    <Layout title="SSG" description="Hacker News API: Top Stories(30)">
      {data.map((item, i) => (
        <Story key={i} item={item} />
      ))}
    </Layout>
  );
}

export default SSGPage;
