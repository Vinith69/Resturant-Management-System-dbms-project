import React, { useState, useEffect } from "react";
import Nav from "./../Nav";
import "./Reservation.css";
import Footer from "./../Footer";
import Axios from "axios";
import { useHistory } from "react-router";
import Food from "../../images/dish.svg";
import chef from "../../images/cooking.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function Reservation() {
	const [date, setDate] = useState("");
	const [persons, setPersons] = useState("");
	const [bg, setBg] = useState("");
	const [loading, setLoading] = useState(false);
	let history = useHistory();
	Axios.defaults.withCredentials = true;

	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

	const handleSubmit = () => {
		setLoading(true);
		console.log(date, persons);
		if (date !== "" && persons !== "") {
			const url = "http://localhost/dbmsCollege/reservations.php";
			Axios.post(url, { date, persons }).then(response => {
				// console.log(response);
				if (response.data.msg === "Reservation was booked") {
					// console.log("Hello");
					setBg("done");
					setTimeout(() => {
						setBg("");
						setLoading(false);
						history.push("/");
					}, 5000);
				} else if (response.data.msg === "Not Authorized") {
					setLoading(false);
					history.push("/login");
				}
			});
		}
	};

	return (
		<>
			<Nav color="add" />
			<section className="Reservation">
				{/* Banner */}
				<section className="reservation-section">
					<div class="reservation-titles">
						<span>About Our Restaurant</span>
						<h2>Book A Table</h2>
					</div>
					<div className={`reservation-form ${bg !== "" && "bg"}`}>
						<input
							// datatype="datepicker"
							// dataDatepicker="true"
							type="date"
							placeholder="Date"
							className="date"
							onChange={e => setDate(e.target.value)}
						/>
						<select onChange={e => setPersons(e.target.value)}>
							{/* <i class="far fa-user"></i> */}
							<option value="" disabled selected>
								&#xf007; Select a table for..
							</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
							<option value="4">Four</option>
						</select>
						<input
							type="time"
							placeholder="Select time"
							className="time"
						/>
						<button
							type="submit"
							className="btn"
							onClick={handleSubmit}
							disabled={loading}
						>
							Book Now
						</button>
					</div>
				</section>
				{/* Banner end */}
				<section className="home-service-section">
					<div
						data-aos="flip-right"
						data-aos-easing="ease-in-out"
						data-aos-duration="1000"
					>
						<p>Our Offerd Menu</p>
						<h2>Some Trendy And Popular Courses Offerd</h2>
					</div>
					<section>
						<div
							data-aos="fade-up"
							data-aos-easing="ease-in-out"
							data-aos-duration="1000"
							className="home-service-container no-shadow"
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
						<div
							data-aos="fade-up"
							data-aos-easing="ease-in-out"
							data-aos-duration="1000"
							className="home-service-container "
						>
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
							data-aos="fade-up"
							data-aos-easing="ease-in-out"
							data-aos-duration="1000"
							className="home-service-container no-shadow"
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
			</section>
			<Footer />
		</>
	);
}

export default Reservation;
