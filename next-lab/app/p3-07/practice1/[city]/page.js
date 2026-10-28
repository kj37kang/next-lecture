// ~/next-lab/app/p3-07/practice1/[city]/page.js
import { notFound } from "next/navigation";

export const instant = false;

const weather = {
  seoul: { temperature: 23, sky: "맑음" },
  busan: { temperature: 25, sky: "흐림" },
  gwangju: { temperature: 24, sky: "비" },
};

export default async function CityPage({ params }) {
  const { city } = await params;
  const today = weather[city];

  if (today === undefined) {
    notFound();
  }

  return (
    <h2 className="p-6 text-xl font-semibold">
      {city} 날씨는 {today.sky}, {today.temperature}도예요
    </h2>
  );
}

// export const instant = false;

// const cities = [{
//   seoul: {temp: "23도", weather: "맑음"},
//   busan: {temp: "25도", weather: "흐림"},
//   gwangju: {temp: "24도", weather: "비"},
// }];

// export default async function Practice1Page({ params }) {
//   const { city } = await params;

//   // if(city )

//   console.log(city.weather)

//   return (
//     <h2 className="p-6 text-xl font-semibold">
//       {city} 날씨는 {cities[city].weather}, {cities[city].temp}예요
//     </h2>
//   )
// }