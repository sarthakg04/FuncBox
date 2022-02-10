import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { Cards } from "./CarouselData";

function CarouselComp() {
	var settings = {
		dots: true,
		dotsClass: "slick-dots",
		infinite: true,
		// autoplay: true,
		// autoplaySpeed: 5000,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		focusOnSelect: true,
		centerMode: true,
		// centerPadding: "50px",
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1240,
				settings: {
					slidesToShow: 4,
					// centerMode: true,
					// centerPadding: "100px",
				},
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<div className="carouselSlider">
			<div className="carouselSliderImages">
				<Slider {...settings}>
					{Cards.map((val, idx) => {
						return (
							<div key={idx} className="carouselSliderImagesDiv">
								<img src={val.imgSrc} alt="" height="300px" />
							</div>
						);
					})}
				</Slider>
			</div>
		</div>
	);
}

export default CarouselComp;
