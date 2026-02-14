import Main from '@/app/components/Main';
import Projects from "@/app/components/Projects";
import Setup from "@/app/components/Setup";

export default async function Page() {
  return (
    <main className="min-h-screen w-full px-4 scroll-smooth">
      <Main/>
      <Projects/>
      <Setup/>
    </main>
  );
}
