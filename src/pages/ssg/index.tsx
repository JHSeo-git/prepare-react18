import Layout from '@/components/Layout.client';
import Story from '@/components/Story.client';
import fetchData from '@/lib/fetch-data';
import { Item } from '@/types/types';
import { GetStaticProps } from 'next';

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
