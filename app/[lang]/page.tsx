import { OnlineResume } from "../../components/online-resume";

export default function Home({ params }: { params: { lang: "en" | "fr" | "nl" } }) {
  return (
    <OnlineResume initialLanguage={params.lang} />
  );
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'fr' },
    { lang: 'nl' },
  ];
}
