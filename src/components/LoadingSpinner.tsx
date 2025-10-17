"use client";

import { Card } from "@/components/ui/card";

export default function LoadingSpinner() {
  return (
    <Card className='p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 flex justify-center items-center'>
      <div className='flex flex-col items-center gap-4'>
        <div className='relative w-12 h-12'>
          <div className='absolute inset-0 rounded-full border-4 border-slate-200 dark:border-slate-700'></div>
          <div className='absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin'></div>
        </div>
        <p className='text-slate-600 dark:text-slate-300'>
          Loading weather data...
        </p>
      </div>
    </Card>
  );
}
