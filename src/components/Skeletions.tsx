export type SkeletionsProps = {
  count: number;
};

function Skeleton() {
  return (
    <div className="rounded-md p-4 w-full mx-auto mb-2">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-3 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-1">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Skeletions({ count }: SkeletionsProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton key={index} />
      ))}
    </>
  );
}

export default Skeletions;
