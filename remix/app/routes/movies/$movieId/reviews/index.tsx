import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, Outlet, useParams, useLoaderData } from "@remix-run/react";

import reviews from "../../../../mocks/reviews";
export const loader = async ({ params: { movieId } }: LoaderArgs) => {
  const movieReviews = reviews.filter(
    ({ movie_id }) => movieId === String(movie_id)
  );
  return json({
    reviews: movieReviews,
  });
};

export default function IndexRoute() {
  const params = useParams();
  const data = useLoaderData<loader>();

  return (
    <div className="container">
      /routes/movies/$movieId/reviews/index.tsx: {JSON.stringify(params)}
      <table>
        <thead>
          <td>Score</td>
          <td>Text</td>
        </thead>
        <tbody>
          {data.reviews.map(({ score, text }, i) => (
            <tr key={i}>
              <td>{score}</td>
              <td>{text}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Outlet />
    </div>
  );
}
