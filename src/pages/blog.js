import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import SiteHead from "../components/siteHead"

import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const contentfulPosts = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SiteHead title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {contentfulPosts.allContentfulBlogPost.edges.map(post => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${post.node.slug}`}>
                <h2>{post.node.title}</h2>
                <p>{post.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
