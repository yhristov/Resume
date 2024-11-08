import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Translation } from "@/types"

interface EducationProps {
  t: Translation;
  isDarkMode: boolean;
}

export const Education: React.FC<EducationProps> = ({ t, isDarkMode }) => (
  <section className="mb-8">
    <h2 className={`text-2xl font-semibold mb-2 ${isDarkMode ? 'text-white' : ''}`}>{t.education}</h2>
    <Card className={`${isDarkMode ? 'bg-slate-900 hover:bg-slate-800' : 'bg-stone-50 hover:bg-blue-50'} transition-all duration-300 hover:shadow-md`}>
      <CardContent className="p-4">
        <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : ''}`}>Professional Bachelor, Multimedia and Communication Technology</h3>
        <p className={`${isDarkMode ? 'text-gray-300' : 'text-stone-600'}`}>Karel de Grote-Hogeschool | 2008 - 2011</p>
      </CardContent>
    </Card>
  </section>
);
