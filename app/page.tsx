import Link from "next/link";
export default function Home() {
  return(
    <main className="p-8">
      <h1 className="text-3xl font-bold">Hello my name is Kier Marvin</h1>
      <p className="mt-2">
        I am exploring to craft a new information of technology. I am a student and I am learning web development using Next.js.  
      </p>

      <Link href="/projects" className="mt-4 inline-block text-blue-500 hover:underline">
        See my projects
      </Link>
    </main>
  );
}