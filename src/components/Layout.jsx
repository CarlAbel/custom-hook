import { Link, Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div>
      <header>
        <h1>Carlzitos Pokédex</h1>
        <nav>
          <menu>
            <li>
              <Link to="/">Forside</Link>
            </li>
          </menu>
        </nav>
      </header>
      <Outlet />
    </div>
  )
}
