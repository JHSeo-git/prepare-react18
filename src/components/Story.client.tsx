import { Item } from '@/types/types';

export type StoryProps = {
  item: Item;
};

function Story({ item }: StoryProps) {
  const { host } = item.url ? new URL(item.url) : { host: '#' };
  return (
    <div className="py-2">
      <div className="flex gap-2 flex-wrap">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm text-blue-700 transition-colors hover:text-blue-500"
        >
          {item.title}
        </a>
        {item.url && (
          <a
            href={`http://${host}`}
            className="inline-block text-sm transition-colors text-gray-700  hover:text-blue-500"
          >
            [{host.replace(/^www\./, '')}]
          </a>
        )}
      </div>
      <div className="flex gap-2 flew-wrap mt-2">
        <p className="text-sm text-gray-900">
          Point: <em className="text-amber-700 tabular-nums">{item.score}</em>
        </p>
        <p className="text-sm text-gray-900">
          Comment:{' '}
          <em className="text-amber-700 tabular-nums">
            {item.descendants ?? 0}
          </em>
        </p>
        <p className="text-sm text-gray-900">
          Published:{' '}
          <em className="text-amber-700 tabular-nums">
            {item.time ? new Date(item.time * 1000).toLocaleString() : 0}
          </em>
        </p>
      </div>
    </div>
  );
}

export default Story;
