import Main from '@/app/components/Main';
import Projects from "@/app/components/Projects";
import Setup from "@/app/components/Setup";
import Me from "@/app/components/Me"
import Experiences from './components/Experiences';

export default async function Page() {
  return (
    <main className="min-h-screen w-full px-4 scroll-smooth">
      <Main/>
      <Me/>
      <Experiences/>
      <Projects/>
      <Setup/>
    </main>
  );
}
