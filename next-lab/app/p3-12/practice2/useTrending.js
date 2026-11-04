// ~/next-lab/app/p3-12/practice2/useTrending.js
import { useQuery } from "@tanstack/react-query";

async function getTrending() {
  const response = await fetch("/p3-12/practice2/api");

  if (!response.ok) {
    throw new Error(`인기 검색어를 불러오지 못했어요 (${response.status})`);
  }

  return response.json();
}

export function useTrending() {
  return useQuery({
    queryKey: ["trending"],
    queryFn: getTrending,
    refetchInterval: 10000,
  });
}