import React, { Component } from 'react';
import cx from 'classnames';
import Slider from 'react-slick';

import '../../stylesheets/components/carousel.css';

import carousel1 from '../../images/carousel/carousel-1.jpg';
import carousel2 from '../../images/carousel/carousel-2.jpg';
import carousel3 from '../../images/carousel/carousel-3.jpg';
import carousel4 from '../../images/carousel/carousel-4.jpg';
import carousel5 from '../../images/carousel/carousel-5.jpg';
import leftArrow from '../../images/carousel/left-arrow.png';
import rightArrow from '../../images/carousel/right-arrow.png';

export function CarouselArrow({ onClick, direction }) {
  const arrowImage = direction === 'left' ? leftArrow : rightArrow;
  return (
    <div onClick={onClick} className={cx('carousel-arrow',
      {
        'carousel-left-arrow': direction === 'left',
        'carousel-right-arrow': direction === 'right'
      }
    )}>
      <img src={arrowImage} alt="arrow" />
    </div>
  );
}

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      accessibility: true,
      arrows: true,
      centerMode: true,
      centerPadding: 0,
      dots: false,
      infinite: true,
      lazyLoad: false,
      prevArrow: <CarouselArrow onClick={this.next} direction="left" />,
      nextArrow: <CarouselArrow onClick={this.previous} direction="right" />,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const imageList = [
      carousel1,
      carousel2,
      carousel3,
      carousel4,
      carousel5,
    ];

    return (
      <Slider ref={c => this.slider = c } {...settings}>
        {
          imageList.map((image, index) => {
            return (
              <div key={index}>
                <img src={image} alt="Anh and Jessica" />
              </div>
            );
          })
        }
      </Slider>
    );
  }
}

export default Carousel;
