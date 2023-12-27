import Image from "next/image";
import WallpaperSelection from "../Components/WallpaperSelection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-pink-500 relative overflow-hidden">
      {/* <WallpaperSelection /> */}
      <figure className="absolute right-[-70px] bottom-[-5px] w-60 lg:w-1/2 border-dotted border-2 border-blue-500 flex items-end justify-end">
        <Image
          src="/ttt.png"
          alt="Action figure"
          width="700"
          height="700"
          priority="false"
        />
      </figure>
    </main>
  );
}
