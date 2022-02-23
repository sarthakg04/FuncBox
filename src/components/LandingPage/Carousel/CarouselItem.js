import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function CarouselItem({
	leftLeftImgSrc,
	leftImgSrc,
	centerImgSrc,
	rightImgSrc,
	rightRightImgSrc,
}) {
	return (
		<div className="carouselSliderItem">
			<LazyLoadImage src={leftLeftImgSrc} alt="Game" id="carouselSliderItemLeftLeft" />
			<LazyLoadImage src={leftImgSrc} alt="Game" id="carouselSliderItemLeft" />
			<LazyLoadImage
				src={centerImgSrc}
				alt="Game"
				id="carouselSliderItemCenter"
				className=""
			/>
			<LazyLoadImage src={rightImgSrc} alt="Game" id="carouselSliderItemRight" />
			<LazyLoadImage
				src={rightRightImgSrc}
				alt="Game"
				id="carouselSliderItemRightRight"
			/>

			<svg width="0" height="0" class="svg">
				<clipPath id="myCurve1" clipPathUnits="objectBoundingBox">
					<path d="M0,0 Q0.5,0.05,1,0 Q0.975,0.5,1,1 Q0.5,0.975,0,1 Q0.05,0.5,0,0"></path>
				</clipPath>
				<clipPath id="myCurve2" clipPathUnits="objectBoundingBox">
					<path d="M0,0 Q0.5,0.1,1,0 Q0.900,0.5,1,1 Q0.5,0.900,0,1 Q0.1,0.5,0,0"></path>
				</clipPath>
			</svg>
		</div>
	);
}

// Default Prop Value
CarouselItem.defaultProps = {
	imgSrc:
		"https://ik.imagekit.io/funcboxImages/Cards_assets/lets_make_it_rain_front_-z4sZcdqS-BM.png",
};
