import type { LinksFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useParams } from "@remix-run/react";
import { json, LoaderArgs } from "@remix-run/node";
import movies from "~/mocks/movies";
import reviews from "~/mocks/reviews";
import sleep from "~/utils/sleep";

export const loader = async ({ params: { movieId } }: LoaderArgs) => {
  await sleep();
  const movieReviews = reviews.filter(
    ({ movie_id }) => movieId === String(movie_id)
  );
  return json({
    movie: movies.find(({ id }) => id.toString() === movieId),
    reviews: movieReviews,
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
      <div className="jumbotron">
        <h1 className="display-3">{data.movie.name}</h1>
        <p>{data.movie.description}</p>
      </div>

      {/*<h2> {new Date().toISOString()}</h2>*/}
      {/*<div className="card">*/}
      {/*  <div className="card-body">*/}
      {/*    <h5 className="card-title">{data.movie.name}</h5>*/}
      {/*    <p className="card-text">{data.movie.description}</p>*/}
      {/*    /!*<Link*!/*/}
      {/*    /!*  to={`/movies/${data.movie.id}/reviews`}*!/*/}
      {/*    /!*  className="btn btn-primary"*!/*/}
      {/*    /!*>*!/*/}
      {/*    /!*  Reviews*!/*/}
      {/*    /!*</Link>*!/*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className="jumbotron">
        <h2 className="mt-2">Reviews</h2>
        <div>
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
        </div>
      </div>

      <div>
        <p>
          Page: /routes/movies/$movieId.tsx (Layout 2) Rendered at:{" "}
          {new Date().toISOString()}
        </p>
      </div>
    </div>
  );
}
