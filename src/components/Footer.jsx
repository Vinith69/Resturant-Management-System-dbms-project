import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer({ color }) {
	return (
		<footer className={`footer ${color && "normal"}`}>
			<section>
				<div className="contact-section row">
					<h2>
						<span className="light">Quick </span>
						<span className="light">Links</span>
					</h2>
					<div>
						<NavLink to="/">Home</NavLink>
						<NavLink to="/menu">Menu</NavLink>
						<NavLink to="/reservation">Reservation</NavLink>
						<NavLink to="/login">Login</NavLink>
					</div>
				</div>
				<div className="contact-section">
					<h2 className="contact-title">
						<span className="light">Contact </span>
						<span className="light">Us</span>
					</h2>
					<div className="contact-details">
						<ul>
							<li>
								<span>Address: </span>
								<p>
									Swarta tirtha, 1st floor, Badagupete, Udupi{" "}
								</p>
							</li>
							<li>
								<span>Telephone: </span>
								<p> 6777777779</p>
							</li>
							<li>
								<span>Email:</span>
								<p>dinchakPooja@gmail.com</p>
							</li>
						</ul>
					</div>
				</div>
				<div className="sociallMedia contact-section row">
					<h2>
						<span>Social </span>
						<span className="light">Media</span>
					</h2>
					<div>
						<a
							target="Hello"
							href="https://www.instagram.com/vinith_nayak/"
						>
							<i class="fab fa-youtube"> </i>
						</a>
						<a href="" target="heludilla">
							<i class="fab fa-instagram"> </i>
						</a>
						<a href="" target="heludilla">
							<i class="fab fa-facebook-f"> </i>
						</a>
						<a href="" target="heludilla">
							<i class="fab fa-twitter"> </i>
						</a>
					</div>
				</div>
			</section>
			<div className="rights">
				<p>Copyright ©2021 Vineeth,Prabhath. All Rights Reserved.</p>
				<p className="my-link">
					Designed By <span>Vineeth P Nayak</span>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
