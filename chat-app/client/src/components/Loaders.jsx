import { Skeleton } from '@mui/material';

export const LayoutLoader = () => {
  return (
    <div className="grid grid-cols-12 gap-2 h-dvh">
      <div className="col-span-3">
        <Skeleton variant="rectangular" height={'100rem'} />
      </div>
      <div className="col-span-6 space-y-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} variant="rectangular" height={'5rem'} />
        ))}
      </div>
      <div className="col-span-3 text-white">
        <Skeleton variant="rectangular" height={'100rem'} />
      </div>
    </div>
  );
};
