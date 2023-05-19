import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useParams } from "@remix-run/react";

import reviews from "~/mocks/reviews";
import sleep from "~/utils/sleep";

export const loader = async ({ params: { movieId } }: LoaderArgs) => {
  await sleep();
  const movieReviews = reviews.filter(
    ({ movie_id }) => movieId === String(movie_id)
  );
  return json({
    reviews: movieReviews,
  });
};

export default function IndexRoute() {
  const params = useParams();
  const data = useLoaderData<typeof loader>();
  return (
    <div className="container mt-5">
      <h3>
        /routes/movies/$movieId/reviews.tsx (Layout 3){" "}
        {new Date().toISOString()}
      </h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Text</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          {data.reviews.map(({ id, text, score }, i) => (
            <tr key={i}>
              <td>{id}</td>
              <td>{text}</td>
              <td>{score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Outlet />
    </div>
  );
}
