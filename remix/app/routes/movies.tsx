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
    <div className="container mt-5">
      <h1>/routes/movies.tsx (Layout 1) {new Date().toISOString()}</h1>
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Users
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Reviews
            </a>
          </li>
        </ul>
      </header>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Director</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {data.movies.map(({ id, name, director, description }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{director}</td>
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
