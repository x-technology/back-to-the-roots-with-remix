import type { LinksFunction } from "@remix-run/node";
import { json, LoaderArgs } from "@remix-run/node";
import { Link, Outlet, useParams, useLoaderData } from "@remix-run/react";

import movies from "../../../mocks/movies";

export const loader = async ({ params: { movieId } }: LoaderArgs) => {
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
      <p>{data.movie.name}</p>
      <Link to={`/movies/${data.movie.id}/reviews`}>Reviews</Link>

      <Outlet />
    </div>
  );
}
