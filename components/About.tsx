import React from 'react';
import { Translation } from "@/types"

interface AboutProps {
  t: Translation;
  isDarkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ t, isDarkMode }) => {
  return (
    <section className="mb-8">
      <h2 className={`text-2xl font-semibold mb-2 ${isDarkMode ? 'text-white' : ''}`}>{t.about}</h2>
      <p className={`${isDarkMode ? 'text-gray-300' : 'text-stone-600'} mb-4`}>
        {t.summary}
      </p>
      <p className={`${isDarkMode ? 'text-gray-300' : 'text-stone-600'}`}>
        {t.interests}
      </p>
    </section>
  );
};
