import { HeroHeader } from "@/components/header";

export default function Home() {
  return (
    <div>
      <HeroHeader />
      <div className="relative flex flex-col justify-start items-center w-full bg-white">
        <div className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 relative flex flex-col justify-start items-start min-h-screen mx-auto">
          <div className="w-px h-full absolute left-4 sm:left-6 md:left-8 lg:left-12 top-0 bg-black z-0"></div>
          <div className="w-px h-full absolute right-4 sm:right-6 md:right-8 lg:right-12 top-0 bg-black z-0"></div>
          {/*remove later*/}
          <div className="relative z-10 w-full px-8 py-24 space-y-8">
            <h1 className="text-4xl font-bold">Welcome to Our Page</h1>
            <p className="text-lg text-gray-700">
              This is placeholder content to test the scrollability and header
              behavior.
            </p>
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <h2 className="text-2xl font-semibold">Section {i + 1}</h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
            ))}{" "}
            {/*remove later*/}
          </div>
        </div>
      </div>
    </div>
  );
}
