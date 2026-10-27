const menu = [
  { name: "americano", price: 4000 },
  { name: "latte", price: 4500 },
  { name: "grapefruit", price: 5000 }
]

export function GET(request) {
  const maxPrice = Number(request.nextUrl.searchParams.get("maxPrice"));

  if (
    !maxPrice
    || maxPrice === 0
    || typeof maxPrice !== 'number'
  ) {
    return Response.json(menu);
  }

  const found = menu.filter((item) => item.price <= maxPrice);

  return Response.json(found);
}