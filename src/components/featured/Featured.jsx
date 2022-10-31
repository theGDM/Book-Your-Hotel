import React from 'react';
import './featured.css';

function Featured() {
  return (
      <div className='featured'>
          <div className="featuredItem">
              <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/104853741.jpg?k=5ddb72c066be88a92617b0c545792fb8408845333204c9f851089cd9351eb0bc&o=&hp=1" alt="" className='featuredImg'/>
              <div className="featuredTitles">
                  <h1>Dublin</h1>
                  <h2>123 properties</h2>
              </div>
          </div>
          <div className="featuredItem">
              <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/131500906.jpg?k=ac4a6b50c298fff670e8dd2278aa4c86de2e35fdafc53889d6e03dd878db8e5a&o=&hp=1" alt="" className='featuredImg'/>
              <div className="featuredTitles">
                  <h1>Austin</h1>
                  <h2>532 properties</h2>
              </div>
          </div>
          <div className="featuredItem">
              <img src="https://bstatic.com/xdata/images/xphoto/1182x887/165609245.jpg?k=18a526ffc2b0e452e76cdd99b9a6e4ab43532b52d0c46b569968483a9a56f2f8&o=?size=S" alt="" className='featuredImg'/>
              <div className="featuredTitles">
                  <h1>Reno</h1>
                  <h2>533 properties</h2>
              </div>
          </div>
    </div>
  )
}

export default Featured;