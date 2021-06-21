import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { css } from "@emotion/react"

export default function Contact({ data }) {
  return (
    <Layout>
      <div
        css={css`
          text-align: center;
          padding-top: 45px;
        `}
      >
        <h2>Page not found 👀</h2>
      </div>
    </Layout>
  )
}
