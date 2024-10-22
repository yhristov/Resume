'use client'

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Moon, Sun } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/Header"
import { About } from "@/components/About"
import { Experience } from "@/components/Experience"
import { Education } from "@/components/Education"
import { Certifications } from "@/components/Certifications"
import { Skills } from "@/components/Skills"
import { translations, TranslationKey } from "@/translations"

interface State {
  isDarkMode: boolean;
  language: TranslationKey;
}

type Action = 
  | { type: 'TOGGLE_DARK_MODE' }
  | { type: 'SET_LANGUAGE'; payload: TranslationKey };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return { ...state, isDarkMode: !state.isDarkMode };
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    default:
      return state;
  }
}

export function OnlineResume({ initialLanguage = "en" }: { initialLanguage?: TranslationKey }) {
  const [state, dispatch] = React.useReducer(reducer, {
    isDarkMode: false,
    language: initialLanguage in translations ? initialLanguage : "en"
  });

  const t = React.useMemo(() => translations[state.language], [state.language]);

  return (
    <div className={`min-h-screen ${state.isDarkMode ? 'bg-black text-gray-200' : 'bg-stone-50 text-stone-800'}`}>
      <div className="container mx-auto p-6">
        <div className="flex justify-end space-x-4 mb-4">
          <Toggle
            aria-label="Toggle dark mode"
            pressed={state.isDarkMode}
            onPressedChange={() => dispatch({ type: 'TOGGLE_DARK_MODE' })}
          >
            {state.isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Toggle>
          <Select 
            value={state.language} 
            onValueChange={(value: TranslationKey) => dispatch({ type: 'SET_LANGUAGE', payload: value })}
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
              <SelectItem value="nl">Nederlands</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Card className={`w-full max-w-4xl mx-auto ${state.isDarkMode ? 'bg-slate-950' : 'bg-white'} shadow-lg transition-shadow duration-300 hover:shadow-xl`}>
          <CardContent className="p-6">
            <Header t={t} isDarkMode={state.isDarkMode} />
            <About t={t} isDarkMode={state.isDarkMode} />
            <Experience t={t} isDarkMode={state.isDarkMode} />
            <Education t={t} isDarkMode={state.isDarkMode} />
            <Certifications t={t} isDarkMode={state.isDarkMode} />
            <Skills t={t} isDarkMode={state.isDarkMode} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
