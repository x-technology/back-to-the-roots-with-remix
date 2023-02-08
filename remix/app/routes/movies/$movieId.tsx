import type { LinksFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

export default function IndexRoute() {
  return (
    <div className="container">
      /routes/movies/$movieId.tsx (Layout 2)
      <Outlet />
    </div>
  );
}
