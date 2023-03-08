import type { LinksFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useParams } from "@remix-run/react";
import { json, LoaderArgs } from "@remix-run/node";
import movies from "~/mocks/movies";

export const loader = async ({ params: { movieId } }: LoaderArgs) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return json({
    movie: movies.find(({ id }) => id.toString() === movieId),
  });
};

export default function IndexRoute() {
  const params = useParams();

  const data = useLoaderData<typeof loader>();
  if (!data.movie) {
    throw new Error("Movie does not exist");
  }

  return (
    <div className="container">
      <h2>/routes/movies/$movieId.tsx (Layout 2) {new Date().toISOString()}</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{data.movie.name}</h5>
          <p className="card-text">{data.movie.description}</p>
          <Link
            to={`/movies/${data.movie.id}/reviews`}
            className="btn btn-primary"
          >
            Reviews
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
