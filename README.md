# Weather App 🌤️

A modern, responsive weather application built with React, TypeScript, and Vite. Get real-time weather updates and 5-day forecasts for any city worldwide.

## ✨ Features

- 🔍 **City Search**: Search for weather information in any city
- 🌡️ **Current Weather**: Real-time temperature, humidity, wind speed, and visibility
- 📅 **5-Day Forecast**: Extended weather forecast with detailed information
- 🌙 **Dark Mode**: Automatic dark mode based on system preference
- 💾 **Local Storage**: Remembers your last searched city
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI**: Beautiful gradients and smooth animations

## 🚀 Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Weather API**: OpenWeatherMap

## 📋 Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- OpenWeatherMap API key

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd weather-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
```

4. Get your API key from [OpenWeatherMap](https://openweathermap.org/api) and replace `your_openweathermap_api_key_here` with your actual API key.

## 🚀 Getting Started

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

Create a production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── ForecastDisplay.tsx # 5-day forecast component
│   ├── LoadingSpinner.tsx  # Loading state component
│   └── WeatherDisplay.tsx  # Current weather display
├── App.tsx                 # Main application component
├── index.css              # Global styles
└── main.tsx               # Application entry point
```

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_WEATHER_API_KEY` | Your OpenWeatherMap API key | Yes |

## 🌐 API Integration

This app uses the OpenWeatherMap API to fetch:
- Current weather data
- 5-day weather forecast
- Weather conditions and descriptions

## 🎨 UI Components

The app uses a custom design system built with:
- **Tailwind CSS** for styling
- **Radix UI** for accessible component primitives
- **Lucide React** for consistent iconography
- **Custom gradients** and animations for visual appeal

## 📱 Responsive Design

- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interface
- Optimized for various screen sizes

## 🧪 Features in Detail

### Weather Display
- Current temperature with "feels like" temperature
- Weather condition icons
- Humidity percentage
- Wind speed in km/h
- Visibility in kilometers

### Forecast Display
- 5-day weather forecast
- Daily temperature highs and lows
- Weather condition descriptions
- Organized in an easy-to-read card layout

### User Experience
- Automatic loading of last searched city
- Error handling for invalid cities
- Loading states with spinner
- Smooth transitions and animations

## 🚀 Deployment

This app can be deployed to various platforms:

### Vercel
```bash
npm run build
# Deploy the `dist` folder
```

### Netlify
```bash
npm run build
# Deploy the `dist` folder
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for the weather API
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Lucide](https://lucide.dev/) for the beautiful icons

## 🧠 Project Overview
A weather app built with React and OpenWeather API.  
🌤 **[View Live Demo →](https://weather-app-pi-jet-24.vercel.app/)**

