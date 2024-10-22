import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { translations } from "@/translations"

type TranslationType = typeof translations.en;

interface HeaderProps {
  t: TranslationType;
  isDarkMode: boolean;
}

export const Header: React.FC<HeaderProps> = ({ t, isDarkMode }) => (
  <header className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-8">
    <Avatar className={`w-32 h-32 border-4 ${isDarkMode ? 'border-gray-700' : 'border-stone-200'} transition-transform duration-300 hover:scale-105`}>
      <AvatarImage src="/img/profile.png" alt={t.name} />
      <AvatarFallback>YH</AvatarFallback>
    </Avatar>
    <div className="text-center sm:text-left space-y-2">
      <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : ''}`}>{t.name}</h1>
      <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-stone-600'}`}>{t.title}</p>
      <div className="flex flex-wrap justify-center sm:justify-start gap-2">
        {[
          { icon: MapPin, text: "Belgium" },
          { icon: Mail, text: "youri@cappiche.Be" },
          { icon: Linkedin, text: "in/youri-h-52ba7b31" },
          { icon: Github, text: "yhristov" },
        ].map((item, index) => (
          <Badge
            key={index}
            variant="secondary"
            className={`flex items-center gap-1 ${isDarkMode ? 'bg-slate-900 text-gray-200 hover:bg-slate-800' : 'bg-stone-100 text-stone-700 hover:bg-blue-100 hover:text-blue-700'} transition-colors duration-300`}
          >
            <item.icon className="w-3 h-3" />
            {item.text}
          </Badge>
        ))}
      </div>
    </div>
  </header>
);
