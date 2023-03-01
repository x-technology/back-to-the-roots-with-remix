import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <main>
      <div className="container">
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
      </div>
      <Outlet />
    </main>
  );
}
