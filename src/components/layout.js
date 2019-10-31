import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
        background-color: skyblue;
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
            color: white;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <div css={css`
          float: right;
          display: inline-block;
        `}>
                  <Link
                    to={`/`}
                    css={css`
                    margin-right: 50px;
                    color:white;
                    `}
                >
                    LOG IN
                </Link>
                <Link
                    to={`/about/`}
                    css={css`
                    padding:20px;
                    border-color:white;
                    background-color:white;
                    color:black;
                    `}
                    
                >
                    PLAY NOW
                </Link>
      </div>

      {children}
    </div>
  )
}