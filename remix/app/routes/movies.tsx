import type { LinksFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/movies";
import { json, LoaderArgs } from "@remix-run/node";
import movies from "~/mocks/movies";

export const loader = async ({ params }: LoaderArgs) => {
  return json({
    movies,
  });
};

export default function IndexRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="container">
      /routes/movies.tsx (Layout 1)
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
