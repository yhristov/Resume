import React from 'react';
import { translations } from "@/translations"

type TranslationType = typeof translations.en;

interface AboutProps {
  t: TranslationType;
  isDarkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ t, isDarkMode }) => (
  <section className="mb-8">
    <h2 className={`text-2xl font-semibold mb-2 ${isDarkMode ? 'text-white' : ''}`}>About</h2>
    <p className={`${isDarkMode ? 'text-gray-300' : 'text-stone-600'} mb-4`}>
      {t.summary}
    </p>
    <p className={`${isDarkMode ? 'text-gray-300' : 'text-stone-600'}`}>
      {t.interests}
    </p>
  </section>
);
