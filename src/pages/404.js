import React from "react"
import { Link } from "gatsby"
// import { Layout } from "../components/common"

const NotFoundPage = () => (
  //   <Layout>
  <div>
    <article>
      <h1>Error 404</h1>
      <section>
        Page not found, <Link to="/">return home</Link> to start over
      </section>
    </article>
  </div>
  //   </Layout>
)

export default NotFoundPage
