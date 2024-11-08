import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Translation, Job } from "@/types"

interface ExperienceProps {
  t: Translation;
  isDarkMode: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ t, isDarkMode }) => {
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  const visibleJobs = showAllExperiences 
    ? t.jobs 
    : t.jobs.slice(0, -3);

  return (
    <section className="mb-8">
      <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : ''}`}>{t.experience}</h2>
      <div className="space-y-4 relative">
        <div className={`hidden sm:block absolute top-0 left-0 sm:left-[140px] w-0.5 h-full ${isDarkMode ? 'bg-slate-700' : 'bg-stone-200'}`}></div>
        {visibleJobs.map((job: Job, index: number) => (
          <div key={index} className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-[140px] mb-2 sm:mb-0 relative">
              <div className="hidden sm:flex items-center h-full">
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-stone-500'} whitespace-nowrap overflow-hidden text-ellipsis pr-3`}>
                  {job.period}
                </p>
                <div className={`absolute right-[-6px] w-3 h-3 rounded-full bg-blue-500 border-2 ${isDarkMode ? 'border-slate-900' : 'border-white'} transition-all duration-300 hover:scale-125`}></div>
              </div>
              <Badge 
                variant="secondary" 
                className={`sm:hidden mb-2 ${isDarkMode ? 'bg-slate-900 text-gray-300' : 'bg-stone-200 text-stone-700'}`}
              >
                {job.period}
              </Badge>
            </div>
            <Card className={`w-full sm:w-[calc(100%-160px)] sm:ml-5 ${isDarkMode ? 'bg-slate-900 hover:bg-slate-800' : 'bg-stone-50 hover:bg-blue-50'} transition-all duration-300 hover:shadow-md`}>
              <CardContent className="p-4">
                <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : ''}`}>{job.title}</h3>
                {job.companyUrl ? (
                  <a 
                    href={job.companyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`${isDarkMode ? 'text-gray-300 hover:text-blue-300' : 'text-stone-600 hover:text-blue-600'} transition-colors duration-300`}
                  >
                    {job.company}
                  </a>
                ) : (
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-stone-600'}`}>{job.company}</p>
                )}
                <ul className={`list-disc pl-5 text-sm ${isDarkMode ? 'text-gray-300' : 'text-stone-600'} mt-2`}>
                  {job.achievements.map((achievement: string, i: number) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      
      {!showAllExperiences && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAllExperiences(true)}
            className="mt-4 px-4 py-2 text-white rounded-md bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            {t.seeMore}
          </button>
        </div>
      )}
    </section>
  );
};
