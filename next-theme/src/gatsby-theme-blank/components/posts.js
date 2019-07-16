/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Layout from '../../components/layout'

export default props => {
  return (
    <Layout>
      <ul>
        {props.posts.map(post => (
          <li key={post.id}>
            <Link to={post.slug}>
              {post.title || post.slug}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

