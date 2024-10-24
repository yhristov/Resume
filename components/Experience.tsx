import React from 'react';
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { translations } from "@/translations"

type TranslationType = typeof translations.en;

interface ExperienceProps {
  t: TranslationType;
  isDarkMode: boolean;
}

interface Job {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

export const Experience: React.FC<ExperienceProps> = ({ t, isDarkMode }) => (
  <section className="mb-8">
    <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : ''}`}>{t.experience}</h2>
    <div className="space-y-4 relative">
      <div className={`hidden sm:block absolute top-0 left-0 sm:left-[140px] w-0.5 h-full ${isDarkMode ? 'bg-gray-700' : 'bg-stone-200'}`}></div>
      {t.jobs.map((job: Job, index: number) => (
        <div key={index} className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-[140px] mb-2 sm:mb-0 relative">
            <div className="hidden sm:flex items-center h-full">
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-stone-500'} whitespace-nowrap overflow-hidden text-ellipsis pr-3`}>{job.period}</p>
              <div className={`absolute right-[-6px] w-3 h-3 rounded-full ${isDarkMode ? 'bg-blue-500' : 'bg-blue-400'} transition-all duration-300 hover:scale-125`}></div>
            </div>
            <Badge 
              variant="secondary" 
              className={`sm:hidden mb-2 ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-stone-200 text-stone-700'}`}
            >
              {job.period}
            </Badge>
          </div>
          <Card className={`w-full sm:w-[calc(100%-160px)] sm:ml-5 ${isDarkMode ? 'bg-slate-900 hover:bg-slate-800' : 'bg-stone-50 hover:bg-blue-50'} transition-all duration-300 hover:shadow-md`}>
            <CardContent className="p-4">
              <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : ''}`}>{job.title}</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-stone-600'} mb-2`}>{job.company}</p>
              <ul className={`list-disc pl-5 text-sm ${isDarkMode ? 'text-gray-300' : 'text-stone-600'}`}>
                {job.achievements.map((achievement: string, i: number) => (
                  <li key={i} className={`transition-colors duration-300 ${isDarkMode ? 'hover:text-blue-300' : 'hover:text-blue-700'}`}>
                    {achievement}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  </section>
);
