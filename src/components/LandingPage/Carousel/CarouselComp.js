import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Carousel.css";
import { Cards } from "./CarouselData";
import CarouselItem from "./CarouselItem";

function CarouselComp() {
	// Use State Variable
	const [leftLeftSrc, setLeftLeftSrc] = useState(0);
	const [leftSrc, setLeftSrc] = useState(1);
	const [centerSrc, setCenterSrc] = useState(2);
	const [rightSrc, setRightSrc] = useState(3);
	const [rightRightSrc, setRightRightSrc] = useState(4);

	let cssProperties = {};

	// Functions
	const prevSlide = () => {
		// cssProperties["--moveImg"] = "-10rem";
		setLeftLeftSrc(leftLeftSrc === 0 ? Cards.length - 1 : leftLeftSrc - 1);
		setLeftSrc(leftSrc === 0 ? Cards.length - 1 : leftSrc - 1);
		setCenterSrc(centerSrc === 0 ? Cards.length - 1 : centerSrc - 1);
		setRightSrc(rightSrc === 0 ? Cards.length - 1 : rightSrc - 1);
		setRightRightSrc(
			rightRightSrc === 0 ? Cards.length - 1 : rightRightSrc - 1
		);
	};

	const nextSlide = () => {
		// cssProperties["--moveImg"] = "10rem";
		setLeftLeftSrc(leftLeftSrc === Cards.length - 1 ? 0 : leftLeftSrc + 1);
		setLeftSrc(leftSrc === Cards.length - 1 ? 0 : leftSrc + 1);
		setCenterSrc(centerSrc === Cards.length - 1 ? 0 : centerSrc + 1);
		setRightSrc(rightSrc === Cards.length - 1 ? 0 : rightSrc + 1);
		setRightRightSrc(
			rightRightSrc === Cards.length - 1 ? 0 : rightRightSrc + 1
		);
	};

	return (
		<div className="carouselSlider">
			<div className="carouselSliderLeft" onClick={prevSlide}>
				<IoIosArrowBack size={50} className="carouselSliderIcon" />
			</div>

			<div className="carouselSliderImages" style={cssProperties}>
				{Cards.map((val, idx) => {
					return (
						<div
							className={
								idx === centerSrc
									? "active carouselSliderImagesDiv"
									: "carouselSliderImagesDiv"
							}
							key={idx}
						>
							{idx === centerSrc && (
								<CarouselItem
									leftLeftImgSrc={Cards[leftLeftSrc].imgSrc}
									leftImgSrc={Cards[leftSrc].imgSrc}
									centerImgSrc={Cards[centerSrc].imgSrc}
									rightImgSrc={Cards[rightSrc].imgSrc}
									rightRightImgSrc={Cards[rightRightSrc].imgSrc}
								/>
							)}
						</div>
					);
				})}
			</div>

			<div className="carouselSliderRight" onClick={nextSlide}>
				<IoIosArrowForward size={50} />
			</div>
		</div>
	);
}

export default CarouselComp;
