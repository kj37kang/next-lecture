const weather = [
  { city: "seoul", temperature: 23, sky: "맑음" },
  { city: "busan", temperature: 25, sky: "흐림" },
  { city: "gwangju", temperature: 24, sky: "비" }
];

export async function GET(request, { params }) {
  const { city } = await params;
  const weatherData = weather.find((item) => item.city === city);

  if (weatherData === undefined) {
    return Response.json({ message: "그런 도시는 없어요" }, { status: 404 });
  }

  return Response.json(weatherData);
}