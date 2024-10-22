import React from 'react';

interface CertificationsProps {
  t: any;
  isDarkMode: boolean;
}

export const Certifications: React.FC<CertificationsProps> = ({ t, isDarkMode }) => (
  <section className="mb-8">
    <h2 className={`text-2xl font-semibold mb-2 ${isDarkMode ? 'text-white' : ''}`}>{t.certifications}</h2>
    <div className="space-y-2">
      <p className={`${isDarkMode ? 'text-gray-300' : 'text-stone-600'}`}>Business Management - VTI</p>
      <p className={`${isDarkMode ? 'text-gray-300' : 'text-stone-600'}`}>PROFESSIONAL SCRUM MASTER 1 - Scrum.org</p>
    </div>
  </section>
);
