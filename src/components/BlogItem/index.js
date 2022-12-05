import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogItem

  const mainEle = (
    <Link to={`/blogs/${id}`} className="routeLink">
      <li className="itemBgContainer">
        <img alt={topic} src={imageUrl} className="topicImg" />
        <div className="blogDetails">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="authorDetails">
            <img alt={author} src={avatarUrl} className="avatarImg" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
  return mainEle
}

export default BlogItem
