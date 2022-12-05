import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogItemDetails: {},
    isLoader: true,
  }

  updateResponseData = data => ({
    id: data.id,
    topic: data.topic,
    title: data.title,
    author: data.author,
    imageUrl: data.image_url,
    avatarUrl: data.avatar_url,
    content: data.content,
  })

  getBlogItemDetails = async id => {
    const {isLoader} = this.state
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedBlogData = this.updateResponseData(data)
    this.setState({blogItemDetails: updatedBlogData, isLoader: !isLoader})
  }

  componentDidMount = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.getBlogItemDetails(id)
  }

  render() {
    const {blogItemDetails, isLoader} = this.state
    const {topic, title, author, imageUrl, avatarUrl, content} = blogItemDetails
    const mainEle = (
      <div className="blogDetailsContainer">
        {isLoader ? (
          <div className="loaderSpinner">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <>
            <h1 className="itemTitle">{title}</h1>
            <div className="itemDetailsContainer">
              <img className="itemAvatarImg" alt={author} src={avatarUrl} />
              <p className="itemAuthorName">{author}</p>
            </div>
            <img alt={title} src={imageUrl} className="itemTopicImg" />
            <p className="content">{content}</p>
          </>
        )}
      </div>
    )

    return mainEle
  }
}

export default BlogItemDetails
