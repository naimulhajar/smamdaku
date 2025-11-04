import type { PrayerTimes, HijriDate } from '../types';
import { SIDOARJO_CITY, SIDOARJO_COUNTRY, PRAYER_TIME_METHOD } from '../constants';

interface AlAdhanResponse {
  code: number;
  status: string;
  data: {
    timings: PrayerTimes;
    date: {
      readable: string;
      hijri: HijriDate;
    };
  };
}

export async function fetchPrayerTimesAndHijriDate(): Promise<{ times: PrayerTimes; hijri: HijriDate }> {
  const today = new Date();
  const dateString = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
  
  const url = `https://api.aladhan.com/v1/timingsByCity/${dateString}?city=${SIDOARJO_CITY}&country=${SIDOARJO_COUNTRY}&method=${PRAYER_TIME_METHOD}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data: AlAdhanResponse = await response.json();

  if (data.code !== 200) {
    throw new Error(data.status || 'Failed to fetch prayer times');
  }

  const { timings, date } = data.data;

  return {
    times: {
      Fajr: timings.Fajr,
      Sunrise: timings.Sunrise,
      Dhuhr: timings.Dhuhr,
      Asr: timings.Asr,
      Maghrib: timings.Maghrib,
      Isha: timings.Isha,
    },
    hijri: date.hijri,
  };
}
