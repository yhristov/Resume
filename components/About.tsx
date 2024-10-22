import React from 'react';

interface AboutProps {
  t: any;
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
