"use client";

import { Cloud, CloudRain, Sun } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { ForecastResponse } from "@/types/types";

export default function ForecastDisplay({
  forecast,
}: {
  forecast: ForecastResponse;
}) {
  // Get daily forecasts (one per day at noon)
  const dailyForecasts: ForecastResponse["list"] = [];
  const seenDates = new Set();

  forecast.list.forEach((item) => {
    const date = new Date(item.dt * 1000);
    const dateStr = date.toLocaleDateString();

    if (!seenDates.has(dateStr) && dailyForecasts.length < 5) {
      seenDates.add(dateStr);
      dailyForecasts.push(item);
    }
  });

  const getWeatherIcon = (description: string) => {
    const desc = description.toLowerCase();
    if (desc.includes("rain"))
      return <CloudRain className='w-8 h-8 text-blue-500' />;
    if (desc.includes("cloud"))
      return <Cloud className='w-8 h-8 text-slate-400' />;
    if (desc.includes("clear") || desc.includes("sunny"))
      return <Sun className='w-8 h-8 text-yellow-400' />;
    return <Cloud className='w-8 h-8 text-slate-400' />;
  };

  return (
    <div>
      <h3 className='text-2xl font-bold mb-4 text-slate-900 dark:text-white'>
        5-Day Forecast
      </h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4'>
        {dailyForecasts.map((day, index) => {
          const date = new Date(day.dt * 1000);
          const temp = Math.round(day.main.temp);
          const description = day.weather[0].main;

          return (
            <Card
              key={index}
              className='p-4 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition-shadow'>
              <p className='font-semibold text-slate-900 dark:text-white mb-3'>
                {date.toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <div className='flex justify-center mb-3'>
                {getWeatherIcon(description)}
              </div>
              <p className='text-sm text-slate-600 dark:text-slate-300 mb-2'>
                {description}
              </p>
              <p className='text-2xl font-bold text-slate-900 dark:text-white'>
                {temp}°C
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
