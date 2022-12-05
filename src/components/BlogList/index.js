import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {
    blogsList: [],
    isLoader: true,
  }

  updateSmallCaseToCamelCase = blogItem => ({
    id: blogItem.id,
    topic: blogItem.topic,
    title: blogItem.title,
    author: blogItem.author,
    imageUrl: blogItem.image_url,
    avatarUrl: blogItem.avatar_url,
  })

  componentDidMount = () => {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const {isLoader} = this.state

    const response = await fetch('https://apis.ccbp.in/blogs')
    const blogsData = await response.json()
    const updatedBlogsData = blogsData.map(blogItem =>
      this.updateSmallCaseToCamelCase(blogItem),
    )

    this.setState({blogsList: updatedBlogsData, isLoader: !isLoader})
  }

  render() {
    const {blogsList, isLoader} = this.state
    const mainEle = (
      <ul className="blogList">
        {isLoader ? (
          <div>
            <Loader
              type="TailSpin"
              color="#00bfff"
              height={50}
              width={50}
              className="loaderSpinner"
            />
          </div>
        ) : (
          blogsList.map(blogItem => (
            <BlogItem key={blogItem.id} blogItem={blogItem} />
          ))
        )}
      </ul>
    )

    return mainEle
  }
}

export default BlogList
