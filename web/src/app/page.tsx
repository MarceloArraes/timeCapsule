export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-starts.svg)] px-28 py-16">
        <div className="absulute right-0 top-1/2 h-[288px] w-[526px] translate-x-1/2 translate-y-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
      </div>

      {/* Right */}
      <div className="flex flex-col items-center justify-center p-16">
        <p className="w-[360px] text-center leading-relaxed">
          You didn&apos;t register any memory. {" \n"}
          <a href="" className="underline hover:text-gray-500">
            create it now
          </a>
        </p>
      </div>
    </main>
  );
}
