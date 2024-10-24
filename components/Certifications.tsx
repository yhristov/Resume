import React from 'react';
import { translations } from "@/translations"
import { Card, CardContent } from "@/components/ui/card"

type TranslationType = typeof translations.en;

interface CertificationsProps {
  t: TranslationType;
  isDarkMode: boolean;
}

export const Certifications: React.FC<CertificationsProps> = ({ t, isDarkMode }) => (
  <section className="mb-8">
    <h2 className={`text-2xl font-semibold mb-2 ${isDarkMode ? 'text-white' : ''}`}>{t.certifications}</h2>
    <Card className={`${isDarkMode ? 'bg-slate-900 hover:bg-slate-800' : 'bg-stone-50 hover:bg-blue-50'} transition-all duration-300 hover:shadow-md`}>
      <CardContent className="p-4">
        <div className="space-y-2">
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-stone-600'}`}>Business Management - VTI</p>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-stone-600'}`}>PROFESSIONAL SCRUM MASTER 1 - Scrum.org</p>
        </div>
      </CardContent>
    </Card>
  </section>
);
