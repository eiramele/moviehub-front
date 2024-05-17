import { Roboto, Days_One } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const daysOne = Days_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function MovieDetail() {
  return (
    <div className="flex flex-col items-center">
      <p className={`${daysOne.className} text-3xl`}>Hairspray</p>
      <p className="mt-6">Year | Country </p>
      <div className="border w-72 h-96 mt-6"></div>
      <p className="m-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nam
        labore, provident ab quia tempore? Fugiat similique debitis aliquid cum
        aliquam amet atque architecto, reprehenderit, porro, praesentium vero
        nesciunt voluptatem.
      </p>
    </div>
  );
}
