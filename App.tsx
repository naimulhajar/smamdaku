import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Slideshow from './components/Slideshow';
import PrayerTimes from './components/PrayerTimes';
import Footer from './components/Footer';
import { fetchPrayerTimesAndHijriDate } from './services/prayerTimeService';
import type { PrayerTimes as PrayerTimesType, HijriDate } from './types';
import { SLIDES_DATA } from './constants';
import { ClockIcon, CloudIcon, ExclamationTriangleIcon } from './components/Icons';

const App: React.FC = () => {
  const [prayerData, setPrayerData] = useState<{ times: PrayerTimesType; hijri: HijriDate } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [temperature] = useState<number>(30); // Mock temperature for Sidoarjo

  useEffect(() => {
    const getPrayerData = async () => {
      try {
        setLoading(true);
        const data = await fetchPrayerTimesAndHijriDate();
        setPrayerData(data);
        setError(null);
      } catch (err) {
        setError('Gagal memuat data jadwal salat. / Failed to load prayer times.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getPrayerData();
    // Refresh data every hour
    const intervalId = setInterval(getPrayerData, 3600000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen flex flex-col font-sans antialiased">
      <Header hijriDate={prayerData?.hijri} temperature={temperature} />

      <main className="flex-grow flex flex-col lg:flex-row p-2 sm:p-4 gap-4 overflow-hidden">
        {/* Main Content: Slideshow */}
        <div className="flex-grow flex items-center justify-center lg:w-3/4">
          <Slideshow slides={SLIDES_DATA} />
        </div>

        {/* Sidebar: Prayer Times */}
        <aside className="w-full lg:w-1/4 lg:max-w-sm flex-shrink-0 bg-slate-800/50 rounded-lg shadow-lg p-4">
          {loading && (
            <div className="flex flex-col items-center justify-center h-full text-slate-400">
              <ClockIcon className="w-12 h-12 animate-spin mb-4" />
              <p className="text-lg">Memuat Jadwal Salat...</p>
              <p className="text-sm italic">Loading Prayer Times...</p>
            </div>
          )}
          {error && (
            <div className="flex flex-col items-center justify-center h-full text-red-400">
              <ExclamationTriangleIcon className="w-12 h-12 mb-4" />
              <p className="text-lg text-center">{error}</p>
            </div>
          )}
          {prayerData && !loading && !error && (
            <PrayerTimes times={prayerData.times} />
          )}
        </aside>
      </main>

      <Footer />
    </div>
  );
};

export default App;
