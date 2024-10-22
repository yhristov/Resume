import React from 'react';
import { Badge } from "@/components/ui/badge"

interface SkillsProps {
  t: any;
  isDarkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ t, isDarkMode }) => (
  <section>
    <h2 className={`text-2xl font-semibold mb-2 ${isDarkMode ? 'text-white' : ''}`}>{t.skills}</h2>
    <div className="flex flex-wrap gap-2">
      {[
        "React.js", "Vue.js", "HTML", "CSS", "JavaScript", "jQuery", 
        "Adobe XD", "Figma", "SIM", "Responsive Design", "Web Development",
        "Front-end Development", "UI/UX Design", "Project Management", "Scrum"
      ].map((skill) => (
        <Badge 
          key={skill} 
          variant="secondary" 
          className={`${isDarkMode ? 'bg-gray-800 text-gray-200 hover:bg-slate-800' : 'bg-stone-100 text-stone-700 hover:bg-blue-100 hover:text-blue-700'} transition-all duration-300 hover:scale-105`}
        >
          {skill}
        </Badge>
      ))}
    </div>
  </section>
);
