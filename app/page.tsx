import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <header className="flex flex-col items-center text-center gap-6">
        
        {/* Your Profile Picture */}
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 shadow-lg">
          <Image
            src="/profile.jpg" 
            alt="Leah Martin"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight">Leah Martin</h1>
        
        <p className="max-w-md text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          Bridging the gap between creative vision and technical execution. 
          I design and develop modern web applications that prioritize 
          <span className="font-semibold text-black dark:text-white"> performance</span> and 
          <span className="font-semibold text-black dark:text-white"> accessibility</span>.
        </p>

        <div className="mt-4 p-4 border border-dashed border-gray-300 rounded-lg">
          <p className="text-sm italic text-gray-500">
            Next: Building the Interactive Gallery & Map...
          </p>
        </div>

      </header>
    </main>
  );
}
