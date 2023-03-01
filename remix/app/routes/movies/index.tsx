import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Outlet, Link } from "@remix-run/react";

import movies from "../../mocks/movies";

export const loader = async ({ params }: LoaderArgs) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return json({
    movies,
  });
};

export default function IndexRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="container">
      <table>
        <thead>
          <td>ID</td>
          <td>Name</td>
          <td>Director</td>
          <td>Description</td>
          <td>Details</td>
        </thead>
        <tbody>
          {data.movies.map(({ id, name, director, description }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{director}</td>
              <td>{description}</td>
              <td>
                <Link to={`/movies/${id}`}>Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Outlet />
    </div>
  );
}
