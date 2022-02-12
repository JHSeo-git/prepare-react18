const cache: { [key: string]: () => unknown } = {};

export default function useData<DataType>(
  key: string,
  fetcher: () => Promise<DataType>
) {
  if (!cache[key]) {
    let data: DataType;
    let promise: Promise<DataType>;
    cache[key] = () => {
      if (data !== undefined) return data;
      if (!promise) promise = fetcher().then(r => (data = r));
      throw promise;
    };
  }
  return cache[key]() as unknown as DataType;
}
