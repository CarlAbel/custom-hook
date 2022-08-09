/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export default function Types({ types }) {
  const styles = {
    type: css`
      text-transform: capitalize;
      list-style: none;
    `,
  }
  return (
    <>
      <h1>Type(s)</h1>
      <ul>
        {types.map((type) => (
          <li css={styles.type} key={type.type.name}>
            {type.type.name}
          </li>
        ))}
      </ul>
    </>
  )
}
