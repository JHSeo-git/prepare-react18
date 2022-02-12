import type { GetServerSideProps } from 'next';
import fetchData from '@/lib/fetch-data';
import Story from '@/components/Story.client';
import { Item } from '@/types/types';

export const getServerSideProps: GetServerSideProps = async context => {
  const storyIds = await fetchData('topstories', 500);
  const data = await Promise.all<Item[]>(
    storyIds.slice(0, 30).map((id: string) => fetchData(`item/${id}`))
  );

  return {
    props: {
      data,
    },
  };
};

export type SSRPageProps = {
  data: Item[];
};

function SSRPage({ data }: SSRPageProps) {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-cyan-700">SSR</h1>
      <p className="text-lg mb-10 text-gray-600">
        Hacker News API: Top Stories(30)
      </p>
      {data.map(item => (
        <Story key={item.id} item={item} />
      ))}
    </div>
  );
}

export default SSRPage;
