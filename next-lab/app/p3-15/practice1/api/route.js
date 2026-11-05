// ~/next-lab/app/p3-15/practice1/api/route.js
import { profile } from "../_data/profile.js";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return Response.json(profile);
}