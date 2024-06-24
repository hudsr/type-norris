import Image from "next/image";

interface NorrisJoke {
  icon_url: string;
  value: string;
}

async function getNorrisJoke(): Promise<NorrisJoke> {
  const res = await fetch("https://api.chucknorris.io/jokes/random", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const norrisJoke = await getNorrisJoke();

  return (
    <main>
      <div className="flex items-center justify-center h-screen">
        <article className="flex flex-col items-center gap-2 px-5">
          <Image
            src={norrisJoke.icon_url}
            width={40}
            height={40}
            alt="Chuck Norris Avatar"
          />
          <h2 className="text-lg font-semibold text-white text-center">
            {norrisJoke.value}
          </h2>
        </article>
      </div>
    </main>
  );
}
