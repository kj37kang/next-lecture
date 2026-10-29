// ~/next-lab/proxy.js
import { NextResponse } from "next/server";
import { books } from "@/app/p3-10/practice1/_data/books.js";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  if (pathname === "/p3-10/practice1/book") {
    const id = request.nextUrl.searchParams.get("id");

    if (id !== null) {
      return NextResponse.redirect(new URL(`/p3-10/practice1/books/${id}`, request.url));
    }
  }

  if (pathname.startsWith("/p3-10/practice1/books/")) {
    const id = pathname.split("/")[4];
    const book = books.find((item) => item.id === Number(id));

    if (book === undefined) {
      return NextResponse.rewrite(new URL("/_not-found", request.url), { status: 404 });
    }
  }
}

export const config = {
  matcher: ["/p3-10/practice1/book", "/p3-10/practice1/books/:id"],
};