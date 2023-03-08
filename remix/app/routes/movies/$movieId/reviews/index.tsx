import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, Outlet, useParams, useLoaderData } from "@remix-run/react";

import reviews from "../../../../mocks/reviews";
export const loader = async ({ params: { movieId } }: LoaderArgs) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const movieReviews = reviews.filter(
    ({ movie_id }) => movieId === String(movie_id)
  );
  return json({
    reviews: movieReviews,
  });
};

export default function IndexRoute() {
  const params = useParams();
  console.log(performance.now());
  const data = useLoaderData<typeof loader>();
  console.log(performance.now());

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
