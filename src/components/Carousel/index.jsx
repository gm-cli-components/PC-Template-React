import React from 'react';
import { Carousel } from 'antd';


const MainCarousel = ({ imgList = [] }) => {
  return (
    <div style={{ minWidth: "1200px", minHeight: '240px', background: "#fff" }}>
      <Carousel autoplay>
        {
          imgList.length > 0
          &&
          imgList.map((item, index) => {
            return (
              <div style={{ minWidth: "1200px", minHeight: '240px', }} key={index}>
                <img width="100%" src={item} alt="" />
              </div>
            );
          })
        }
      </Carousel>
    </div>
  );
};

export default MainCarousel;
