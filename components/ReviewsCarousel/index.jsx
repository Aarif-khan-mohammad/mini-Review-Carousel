import { Component } from 'react';
import './index.css'

class ReviwsCarousel extends Component {
  
  state = {count : 0}

  onLeft = () =>{
    const {count} = this.state;

    if(count >0){
      
        this.setState((prevState) => ({count : prevState.count - 1}))
    }
  }

  onRight = () =>{
    const {count} = this.state;
    const {reviewDetails} = this.props;

    if(count <  reviewDetails.length - 1 ){

        this.setState((prevState) => ({count : prevState.count + 1}))
    }
  }

  
  
  render(){  
    
    const {count} = this.state
    const {reviewDetails} = this.props;
    const {imgUrl,username,companyName,description} = reviewDetails[count];

    
    
  return(
    <div className='main-container'>
      <div className='review-card'>
        <h1 className='heading'>Reviews</h1>
        <img src={imgUrl} alt="" className='user-image'/>
        <div className='switch'>
          <button className='left' onClick={this.onLeft}>
            <img src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png" alt="" />
          </button>
          <h4 className='user-name'>{username}</h4>
          <button  className='left' onClick={this.onRight} >
            <img src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png" alt=""/>
          </button>
        </div>
        <p className='company-name'>{companyName}</p>
        <p className='description'>{description}</p>
      </div>
    </div>
  )}
}

export default ReviwsCarousel;