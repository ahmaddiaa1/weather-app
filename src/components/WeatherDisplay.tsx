"use client";

import { Cloud, CloudRain, Sun, Wind, Droplets, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { WeatherResponse } from "@/types/types";

export default function WeatherDisplay({
  weather,
}: {
  weather: WeatherResponse;
}) {
  const getWeatherIcon = (description: string) => {
    const desc = description.toLowerCase();
    if (desc.includes("rain"))
      return <CloudRain className='w-16 h-16 text-blue-500' />;
    if (desc.includes("cloud"))
      return <Cloud className='w-16 h-16 text-slate-400' />;
    if (desc.includes("clear") || desc.includes("sunny"))
      return <Sun className='w-16 h-16 text-yellow-400' />;
    return <Cloud className='w-16 h-16 text-slate-400' />;
  };

  const temp = Math.round(weather.main.temp);
  const feelsLike = Math.round(weather.main.feels_like);
  const humidity = weather.main.humidity;
  const windSpeed = Math.round(weather.wind.speed);
  const visibility = (weather.visibility / 1000).toFixed(1);
  const description = weather.weather[0].main;

  return (
    <Card className='mb-8 p-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white border-0 shadow-lg'>
      <div className='flex items-start justify-between mb-6'>
        <div>
          <h2 className='text-3xl font-bold mb-1'>
            {weather.name}, {weather.sys.country}
          </h2>
          <p className='text-blue-100'>{description}</p>
        </div>
        {getWeatherIcon(description)}
      </div>

      <div className='mb-6'>
        <div className='text-6xl font-bold mb-2'>{temp}°C</div>
        <p className='text-blue-100'>Feels like {feelsLike}°C</p>
      </div>

      <div className='grid grid-cols-3 gap-4'>
        <div className='bg-white/10 rounded-lg p-4 backdrop-blur'>
          <div className='flex items-center gap-2 mb-2'>
            <Droplets className='w-5 h-5' />
            <span className='text-sm text-blue-100'>Humidity</span>
          </div>
          <p className='text-2xl font-semibold'>{humidity}%</p>
        </div>

        <div className='bg-white/10 rounded-lg p-4 backdrop-blur'>
          <div className='flex items-center gap-2 mb-2'>
            <Wind className='w-5 h-5' />
            <span className='text-sm text-blue-100'>Wind Speed</span>
          </div>
          <p className='text-2xl font-semibold'>{windSpeed} km/h</p>
        </div>

        <div className='bg-white/10 rounded-lg p-4 backdrop-blur'>
          <div className='flex items-center gap-2 mb-2'>
            <Eye className='w-5 h-5' />
            <span className='text-sm text-blue-100'>Visibility</span>
          </div>
          <p className='text-2xl font-semibold'>{visibility} km</p>
        </div>
      </div>
    </Card>
  );
}
