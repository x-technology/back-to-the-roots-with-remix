import type { LinksFunction } from "@remix-run/node";
import { Link, Outlet, useParams } from "@remix-run/react";

export default function IndexRoute() {
  const params = useParams();
  return (
    <div className="container">
      movies/$movieId/reviews/$reviewId/index.tsx: {JSON.stringify(params)}
      <Outlet />
    </div>
  );
}
