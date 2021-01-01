import React, { useEffect, useContext } from "react";
import Nav from "./../Nav";
import "./Home.css";
import cheers from "../../images/cheers.svg";
import Food from "../../images/dish.svg";
import chef from "../../images/cooking.svg";
import Footer from "./../Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

	return (
		<>
			<Nav />
			<div className="image-banner">
				<div data-aos="fade-up" data-aos-easing="ease-in-out">
					<h1>INDULGE YOURSELF </h1>
				</div>
			</div>
			<div className="Home">
				<section className="food-container">
					<div
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="1000"
						className="food-details-container"
					>
						<img src={cheers} height="100px" />
						<h2>Drinks</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Nesciunt eum iste culpa cupiditate pariatur
							animi nostrum quo nihil autem facilis.
						</p>
					</div>
					<div
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="1000"
						className="food-details-container"
					>
						<img src={cheers} height="100px" />
						<h2>Drinks</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Nesciunt eum iste culpa cupiditate pariatur
							animi nostrum quo nihil autem facilis.
						</p>
					</div>
					<div
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="1000"
						className="food-details-container"
					>
						<img src={cheers} height="100px" />
						<h2>Drinks</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Nesciunt eum iste culpa cupiditate pariatur
							animi nostrum quo nihil autem facilis.
						</p>
					</div>
					<div
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="1000"
						className="food-details-container"
					>
						<img src={cheers} height="100px" />
						<h2>Drinks</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Nesciunt eum iste culpa cupiditate pariatur
							animi nostrum quo nihil autem facilis.
						</p>
					</div>
				</section>
				{/* Home-service */}
				<section className="home-service-section">
					<div
						data-aos="flip-right"
						data-aos-easing="ease-in-out"
						data-aos-duration="1000"
						data-aos-offset="350"
					>
						<p>Our Offerd Menu</p>
						<h2>Some Trendy And Popular Courses Offerd</h2>
					</div>
					<section>
						<div
							className="home-service-container no-shadow"
							data-aos="flip-right"
							data-aos-easing="ease-in-out"
							data-aos-duration="1000"
						>
							<img src={chef} height="100px" alt="" />
							<h2>Quality Food</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Nesciunt eum iste culpa
								cupiditate pariatur animi nostrum quo nihil
								autem facilis.
							</p>
						</div>
						<div className="home-service-container ">
							<img src={Food} height="100px" alt="" />
							<h2>Quality Food</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Nesciunt eum iste culpa
								cupiditate pariatur animi nostrum quo nihil
								autem facilis.
							</p>
						</div>
						<div
							className="home-service-container no-shadow"
							data-aos="flip-left"
							data-aos-easing="ease-in-out"
							data-aos-duration="1000"
						>
							<img src={chef} height="100px" alt="" />
							<h2>Quality Food</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Nesciunt eum iste culpa
								cupiditate pariatur animi nostrum quo nihil
								autem facilis.
							</p>
						</div>
					</section>
				</section>
				<Footer />
			</div>
		</>
	);
}

export default Home;
