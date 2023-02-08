import type { LinksFunction } from "@remix-run/node";
import { Link, Outlet, useParams } from "@remix-run/react";

export default function IndexRoute() {
  const params = useParams();
  return (
    <div className="container">
      /routes/movies/$movieId/reviews/$reviewId.tsx: {JSON.stringify(params)}
      <Outlet />
    </div>
  );
}
