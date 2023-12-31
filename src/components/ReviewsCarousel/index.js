// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewList: 0,
  }

  moveLeft = () => {
    const {activeReviewList} = this.state
    if (activeReviewList - 1 >= 0) {
      this.setState(prevState => ({
        activeReviewList: prevState.activeReviewList - 1,
      }))
    }
  }

  moveRight = () => {
    const {activeReviewList} = this.state
    const {reviewsList} = this.props
    if (activeReviewList + 1 < reviewsList.length) {
      this.setState(prevState => ({
        activeReviewList: prevState.activeReviewList + 1,
      }))
    }
  }

  render() {
    const {activeReviewList} = this.state
    const {reviewsList} = this.props
    const currentReviewList = reviewsList[activeReviewList]
    return (
      <div className="bg-container">
        <h1 className="main-heading">Reviews</h1>
        <div className="review-container">
          <img
            src={currentReviewList.imgUrl}
            className="profile-photo"
            alt={currentReviewList.username}
          />
          <div className="arrow-name-container">
            <button className="btn" type="button" data-testid="leftArrow">
              <img
                className="arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                onClick={this.moveLeft}
                alt="left arrow"
              />
            </button>
            <div>
              <p className="username">{currentReviewList.username}</p>
              <p className="company-name">{currentReviewList.companyName}</p>
            </div>
            <button className="btn" type="button" data-testid="rightArrow">
              <img
                className="arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                onClick={this.moveRight}
                alt="right arrow"
              />
            </button>
          </div>
          <p className="description">{currentReviewList.description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
