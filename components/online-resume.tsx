'use client'

import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Moon, Sun } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const translations = {
  en: {
    name: "Youri Hristov",
    title: "Freelance Web Developer",
    summary: "Broad knowledge of web development and web design. I prefer to work in a project based environment where I'm responsible for the quality and progress of the total project. I'm eager to learn new technologies and have a good base knowledge of the current industry standards.",
    interests: "My interests outside work are fitness, hiking, running and social activities.",
    experience: "Work Experience",
    education: "Education",
    skills: "Skills",
    certifications: "Certifications",
    jobs: [
      {
        title: "Freelance Web Developer",
        company: "Cappiche",
        period: "Jun 2018 - Present",
        achievements: [
          "Developed and launched customized websites for various clients and agencies.",
          "Provided emergency digital solutions, leveraging platforms such as Netlify, DecapCMS, HubSpot, WordPress.",
          "Enhanced website performance and user experience through modern web development practices."
        ]
      },
      {
        title: "Web Front-end & SIM Developer",
        company: "BNP Paribas Fortis",
        period: "Jun 2018 - Present",
        achievements: [
          "Managed and executed marketing automation projects, including personalized email campaigns and online experiences, using Selligent Interactive Marketing.",
          "Delivered exceptional UI/UX with responsive designs using HTML, CSS, JavaScript, Vue.js, and jQuery.",
          "Collaborated closely with internal stakeholders to ensure optimal project outcomes."
        ]
      },
      {
        title: "Web Front-end & Campaign Developer",
        company: "VRT",
        period: "Apr 2017 - Jun 2018",
        achievements: [
          "Created engaging campaign web pages for events, contests, and surveys.",
          "Integrated automated email/SMS communication for marketing efforts.",
          "Developed solutions to drive audience engagement across multiple platforms."
        ]
      },
      {
        title: "IT Consultant",
        company: "UniPartners IT - Financial - Engineering Services",
        period: "Feb 2015 - Apr 2018",
        achievements: [
          "Provided IT consultancy services to various clients",
          "Specialized in web development and engineering solutions"
        ]
      },
      {
        title: "Web Front-end & SIM Developer",
        company: "BNP Paribas Fortis",
        period: "Feb 2015 - Apr 2017",
        achievements: [
          "Developed automated marketing emails and online campaigns",
          "Focused on great user experience and beautiful responsive design",
          "Used technologies: SIM, HTML, CSS, Javascript, and jQuery"
        ]
      },
      {
        title: "Interactive Media Developer",
        company: "SBS Belgium",
        period: "Oct 2012 - Apr 2014",
        achievements: [
          "Developed custom Drupal modules for vier.be and vijf.be, ensuring scalability and maintainability.",
          "Designed and implemented new pages to enhance user engagement and site functionality."
        ]
      },
      {
        title: "Junior Web Developer",
        company: "Bose Corporation",
        period: "Jul 2012 - Nov 2012",
        achievements: [
          "Assisted in web development projects for Bose Corporation",
          "Gained valuable experience in corporate web development practices"
        ]
      }
    ],
  },
  fr: {
    name: "Youri Hristov",
    title: "Développeur Web Freelance",
    summary: "Large connaissance du développement et de la conception web. Je préfère travailler dans un environnement basé sur des projets où je suis responsable de la qualité et de l'avancement du projet total. Je suis désireux d'apprendre de nouvelles technologies et j'ai une bonne connaissance de base des normes actuelles de l'industrie.",
    interests: "Mes intérêts en dehors du travail sont le fitness, la randonnée, la course à pied et les activités sociales.",
    experience: "Expérience Professionnelle",
    education: "Formation",
    skills: "Compétences",
    certifications: "Certifications",
    jobs: [
      {
        title: "Développeur Web Freelance",
        company: "Cappiche",
        period: "Juin 2018 - Présent",
        achievements: [
          "Développé et lancé des sites web personnalisés pour divers clients et agences.",
          "Fourni des solutions numériques d'urgence, en utilisant des plateformes telles que Netlify, DecapCMS, HubSpot, WordPress.",
          "Amélioré les performances des sites web et l'expérience utilisateur grâce aux pratiques modernes de développement web."
        ]
      },
      {
        title: "Développeur Front-end Web & SIM",
        company: "BNP Paribas Fortis",
        period: "Juin 2018 - Présent",
        achievements: [
          "Géré et exécuté des projets d'automatisation marketing, y compris des campagnes d'e-mails personnalisées et des expériences en ligne, en utilisant Selligent Interactive Marketing.",
          "Livré une UI/UX exceptionnelle avec des designs responsifs en utilisant HTML, CSS, JavaScript, Vue.js et jQuery.",
          "Collaboré étroitement avec les parties prenantes internes pour assurer des résultats optimaux des projets."
        ]
      },
      {
        title: "Développeur Front-end Web & Campagnes",
        company: "VRT",
        period: "Avr 2017 - Juin 2018",
        achievements: [
          "Créé des pages web de campagne engageantes pour des événements, concours et sondages.",
          "Intégré des communications automatisées par e-mail/SMS pour les efforts marketing.",
          "Développé des solutions pour stimuler l'engagement du public sur plusieurs plateformes."
        ]
      },
      {
        title: "Consultant IT",
        company: "UniPartners IT - Financial - Engineering Services",
        period: "Fév 2015 - Avr 2018",
        achievements: [
          "Fourni des services de conseil IT à divers clients.",
          "Spécialisé dans le développement web et les solutions d'ingénierie."
        ]
      },
      {
        title: "Développeur Front-end Web & SIM",
        company: "BNP Paribas Fortis",
        period: "Fév 2015 - Avr 2017",
        achievements: [
          "Développé des e-mails marketing automatisés et des campagnes en ligne.",
          "Mis l'accent sur une excellente expérience utilisateur et un design responsive attrayant.",
          "Utilisé les technologies : SIM, HTML, CSS, Javascript et jQuery."
        ]
      },
      {
        title: "Développeur de Médias Interactifs",
        company: "SBS Belgium",
        period: "Oct 2012 - Avr 2014",
        achievements: [
          "Développé des modules Drupal personnalisés pour vier.be et vijf.be, assurant l'évolutivité et la maintenabilité.",
          "Conçu et mis en œuvre de nouvelles pages pour améliorer l'engagement des utilisateurs et la fonctionnalité du site."
        ]
      },
      {
        title: "Développeur Web Junior",
        company: "Bose Corporation",
        period: "Juil 2012 - Nov 2012",
        achievements: [
          "Assisté dans des projets de développement web pour Bose Corporation.",
          "Acquis une expérience précieuse dans les pratiques de développement web en entreprise."
        ]
      }
    ],
  },
  nl: {
    name: "Youri Hristov",
    title: "Freelance Webontwikkelaar",
    summary: "Brede kennis van webontwikkeling en webdesign. Ik werk bij voorkeur in een projectmatige omgeving waar ik verantwoordelijk ben voor de kwaliteit en voortgang van het totale project. Ik ben eager om nieuwe technologieën te leren en heb een goede basiskennis van de huidige industriestandaarden.",
    interests: "Mijn interesses buiten het werk zijn fitness, wandelen, hardlopen en sociale activiteiten.",
    experience: "Werkervaring",
    education: "Opleiding",
    skills: "Vaardigheden",
    certifications: "Certificeringen",
    jobs: [
      {
        title: "Freelance Webontwikkelaar",
        company: "Cappiche",
        period: "Jun 2018 - Heden",
        achievements: [
          "Ontwikkeld en gelanceerd van aangepaste websites voor verschillende klanten en bureaus.",
          "Noodoplossingen geleverd met platforms zoals Netlify, DecapCMS, HubSpot, WordPress.",
          "Verbeterde websiteprestaties en gebruikerservaring door moderne webontwikkelingspraktijken."
        ]
      },
      {
        title: "Web Front-end & SIM Ontwikkelaar",
        company: "BNP Paribas Fortis",
        period: "Jun 2018 - Heden",
        achievements: [
          "Beheerd en uitgevoerd van marketingautomatiseringsprojecten, waaronder gepersonaliseerde e-mailcampagnes en online ervaringen, met behulp van Selligent Interactive Marketing.",
          "Uitzonderlijke UI/UX geleverd met responsieve ontwerpen met behulp van HTML, CSS, JavaScript, Vue.js en jQuery.",
          "Nauw samengewerkt met interne belanghebbenden om optimale projectresultaten te waarborgen."
        ]
      },
      {
        title: "Web Front-end & Campagne Ontwikkelaar",
        company: "VRT",
        period: "Apr 2017 - Jun 2018",
        achievements: [
          "Boeiende campagnewebpagina's gemaakt voor evenementen, wedstrijden en enquêtes.",
          "Geautomatiseerde e-mail/SMS-communicatie geïntegreerd voor marketinginspanningen.",
          "Oplossingen ontwikkeld om publieksengagement over meerdere platforms te stimuleren."
        ]
      },
      {
        title: "IT Consultant",
        company: "UniPartners IT - Financial - Engineering Services",
        period: "Feb 2015 - Apr 2018",
        achievements: [
          "IT-adviesdiensten geleverd aan verschillende klanten.",
          "Gespecialiseerd in webontwikkeling en engineeringoplossingen."
        ]
      },
      {
        title: "Web Front-end & SIM Ontwikkelaar",
        company: "BNP Paribas Fortis",
        period: "Feb 2015 - Apr 2017",
        achievements: [
          "Geautomatiseerde marketing e-mails en online campagnes ontwikkeld.",
          "Gericht op geweldige gebruikerservaring en mooi responsief ontwerp.",
          "Gebruikte technologieën: SIM, HTML, CSS, Javascript en jQuery."
        ]
      },
      {
        title: "Interactieve Media Ontwikkelaar",
        company: "SBS Belgium",
        period: "Okt 2012 - Apr 2014",
        achievements: [
          "Aangepaste Drupal-modules ontwikkeld voor vier.be en vijf.be, met focus op schaalbaarheid en onderhoudbaarheid.",
          "Nieuwe pagina's ontworpen en geïmplementeerd om gebruikersbetrokkenheid en sitefunctionaliteit te verbeteren."
        ]
      },
      {
        title: "Junior Webontwikkelaar",
        company: "Bose Corporation",
        period: "Jul 2012 - Nov 2012",
        achievements: [
          "Geassisteerd bij webontwikkelingsprojecten voor Bose Corporation.",
          "Waardevolle ervaring opgedaan in zakelijke webontwikkelingspraktijken."
        ]
      }
    ],
  },
}

export function OnlineResume({ initialLanguage = "en" }: { initialLanguage?: "en" | "fr" | "nl" }) {
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const [language, setLanguage] = React.useState<"en" | "fr" | "nl">(
    initialLanguage in translations ? initialLanguage : "en"
  )
  const t = translations[language] || translations.en // Fallback to English if language is not found

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-gray-200' : 'bg-stone-50 text-stone-800'}`}>
      <div className="container mx-auto p-6">
        <div className="flex justify-end space-x-4 mb-4">
          <Toggle
            aria-label="Toggle dark mode"
            pressed={isDarkMode}
            onPressedChange={setIsDarkMode}
          >
            {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Toggle>
          <Select value={language} onValueChange={(value: "en" | "fr" | "nl") => {
            setLanguage(value)
            window.location.href = `/${value}`
          }}>
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
        <Card className={`w-full max-w-4xl mx-auto ${isDarkMode ? 'bg-slate-950' : 'bg-white'} shadow-lg transition-shadow duration-300 hover:shadow-xl`}>
          <CardContent className="p-6">
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

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-2 ${isDarkMode ? 'text-white' : ''}`}>About</h2>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-stone-600'} mb-4`}>
                {t.summary}
              </p>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-stone-600'}`}>
                {t.interests}
              </p>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : ''}`}>{t.experience}</h2>
              <div className="space-y-4">
                {t.jobs.map((job, index) => (
                  <div key={index} className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-1/4 pr-4 mb-2 sm:mb-0">
                      <div className="hidden sm:block relative h-full">
                        <div className={`absolute top-0 left-1/2 w-0.5 h-full ${isDarkMode ? 'bg-gray-700' : 'bg-stone-200'} -translate-x-1/2`}></div>
                        <div className={`absolute top-1 left-1/2 w-3 h-3 rounded-full ${isDarkMode ? 'bg-blue-500' : 'bg-blue-400'} -translate-x-1/2 transition-all duration-300 hover:scale-125`}></div>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`sm:hidden mb-2 ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-stone-200 text-stone-700'}`}
                      >
                        {job.period}
                      </Badge>
                      <p className={`hidden sm:block text-sm ${isDarkMode ? 'text-gray-400' : 'text-stone-500'} mt-1`}>{job.period}</p>
                    </div>
                    <Card className={`w-full sm:w-3/4 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-stone-50 hover:bg-blue-50'} transition-all duration-300 hover:shadow-md`}>
                      <CardContent className="p-4">
                        <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : ''}`}>{job.title}</h3>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-stone-600'} mb-2`}>{job.company}</p>
                        <ul className={`list-disc pl-5 text-sm ${isDarkMode ? 'text-gray-300' : 'text-stone-600'}`}>
                          {job.achievements.map((achievement, i) => (
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

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-2 ${isDarkMode ? 'text-white' : ''}`}>{t.education}</h2>
              <Card className={`${isDarkMode ? 'bg-slate-900 hover:bg-slate-800' : 'bg-stone-50 hover:bg-blue-50'} transition-all duration-300 hover:shadow-md`}>
                <CardContent className="p-4">
                  <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : ''}`}>Professional Bachelor, Multimedia and Communication Technology</h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-stone-600'}`}>Karel de Grote-Hogeschool | 2008 - 2011</p>
                </CardContent>
              </Card>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-2 ${isDarkMode ? 'text-white' : ''}`}>{t.certifications}</h2>
              <div className="space-y-2">
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-stone-600'}`}>Business Management - VTI</p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-stone-600'}`}>PROFESSIONAL SCRUM MASTER 1 - Scrum.org</p>
              </div>
            </section>

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
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
