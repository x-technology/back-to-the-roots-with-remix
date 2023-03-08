import type { LinksFunction } from "@remix-run/node";
import { Link, Outlet, useParams } from "@remix-run/react";

export default function IndexRoute() {
  const params = useParams();
  return (
    <div className="container mt-5">
      <h4>
        /routes/movies/$movieId/reviews/$reviewId.tsx:{" "}
        {new Date().toISOString()}
      </h4>

      <Outlet />
    </div>
  );
}
