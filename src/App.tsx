import { useState, useEffect, type FormEvent } from "react";
import { Search, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import WeatherDisplay from "@/components/WeatherDisplay";
import ForecastDisplay from "@/components/ForecastDisplay";
import LoadingSpinner from "@/components/LoadingSpinner";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved city in localStorage
    const savedCity = localStorage.getItem("lastCity");
    if (savedCity) {
      fetchWeather(savedCity);
    } else {
      fetchWeather("Cairo");
    }

    // Check for dark mode preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDark(prefersDark);
  }, []);

  const fetchWeather = async (cityName: string) => {
    if (!API_KEY) {
      setError(
        "API key not configured. Please add NEXT_PUBLIC_OPENWEATHER_API_KEY to your environment variables."
      );
      return;
    }

    setLoading(true);
    setError("");

    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      if (!weatherResponse.ok) {
        throw new Error("City not found");
      }

      const weatherData = await weatherResponse.json();
      setWeather(weatherData);
      localStorage.setItem("lastCity", cityName);

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      if (forecastResponse.ok) {
        const forecastData = await forecastResponse.json();
        setForecast(forecastData);
      }
    } catch (err) {
      const error = err as { message: string };
      setError(error.message || "Failed to fetch weather data");
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInput.trim()) {
      fetchWeather(searchInput.trim());
      setSearchInput("");
    }
  };

  return (
    <div
      className={`min-h-svh transition-colors duration-300 ${
        isDark
          ? "dark bg-slate-950"
          : "bg-gradient-to-br from-blue-50 to-indigo-100"
      }`}>
      <main className='container mx-auto px-4 py-4 max-w-4xl'>
        {/* Header */}
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-bold mb-2 text-slate-900 dark:text-white'>
            Weather App
          </h1>
          <p className='text-slate-600 dark:text-slate-300'>
            Get real-time weather updates for any city
          </p>
        </div>

        <form
          onSubmit={handleSearch}
          className='mb-8'>
          <div className='flex gap-2'>
            <Input
              type='text'
              placeholder='Search for a city...'
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className='flex-1 bg-white! dark:bg-slate-800 border-slate-200 dark:border-slate-700'
            />
            <Button
              type='submit'
              className='bg-blue-600 hover:bg-blue-700 text-white'
              disabled={loading}>
              <Search className='w-4 h-4' />
            </Button>
          </div>
        </form>

        {/* Error Message */}
        {error && error !== "" && (
          <Card className='mb-6 p-4 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'>
            <p className='text-red-700 dark:text-red-300'>
              {JSON.stringify(error)}
            </p>
          </Card>
        )}

        {/* Loading State */}
        {loading && <LoadingSpinner />}

        {/* Weather Display */}
        {weather && !loading && <WeatherDisplay weather={weather} />}

        {/* Forecast Display */}
        {forecast && !loading && <ForecastDisplay forecast={forecast} />}

        {/* No Data State */}
        {!weather && !loading && !error && (
          <Card className='p-8 text-center bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'>
            <Cloud className='w-12 h-12 mx-auto mb-4 text-slate-400' />
            <p className='text-slate-600 dark:text-slate-300'>
              Search for a city to see weather information
            </p>
          </Card>
        )}
      </main>
    </div>
  );
}
