/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Link, Outlet } from "react-router-dom"

export default function Layout() {
  const styles = {
    header: css`
      height: 10vh;
      h1 {
        margin: 0;
      }
      menu {
        list-style: none;
        padding: 0;
        margin: 0;
      }
    `,
    content: css`
      height: 90vh;
      overflow-y: scroll;
    `,
  }

  return (
    <div>
      <header css={styles.header}>
        <h1>Carlzitos PokeDex</h1>
        <nav>
          <menu>
            <li>
              <Link to="/">Forside</Link>
            </li>
          </menu>
        </nav>
      </header>
      <main css={styles.content}>
        <Outlet />
      </main>
    </div>
  )
}
