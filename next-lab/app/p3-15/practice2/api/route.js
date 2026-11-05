// ~/next-lab/app/p3-15/practice2/api/route.js
import { profile } from "../_data/profile.js";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return Response.json(profile);
}