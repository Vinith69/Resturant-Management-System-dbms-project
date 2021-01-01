import React, { useState, useEffect } from "react";
import "./Menu.css";
import Nav from "./../Nav";
import { api } from "./../api";
import Axios from "axios";
import { useHistory } from "react-router";
import Footer from "../Footer";
import AOS from "aos";
import "aos/dist/aos.css";
// import { AuthContext } from "../../App";
// import Reducer, { initialState } from "./../Reducer";

function Menu() {
	// const { state } = React.useContext(AuthContext);
	// console.log(React.useContext(AuthContext));
	const [cart, setCart] = useState([]);
	const [status, setStatus] = useState("");
	const total = cart.reduce((acc, curr) => acc + curr.tPrice, 0);
	const items = cart.reduce((acc, curr) => acc + curr.count, 0);
	Axios.defaults.withCredentials = true;

	let history = useHistory();
	// const [state, dispatch] = useReducer(Reducer, initialState);

	// let location = useLocation();
	// console.log(state.isLoggedIn);
	useEffect(() => {
		setCart(cart.splice(0));
		// console.log("Dinchak");
	}, []);

	const addToCart = products => {
		setStatus("");
		if (cart.includes(products)) {
			// console.log("Present re");
			// console.log(products);
			products.count++;
			products.tPrice = products.price * products.count;
			setCart([...cart]);
		} else {
			setCart([...cart, products]);
		}
	};

	const removeFromCart = products => {
		if (products.count > 1) {
			// console.log("Present re");
			// console.log(products);
			products.count--;
			products.tPrice = products.price * products.count;
			setCart([...cart]);
		} else {
			let cartCopy = [...cart];
			cartCopy = cartCopy.filter(items => items.image !== products.image);
			setCart(cartCopy);
		}
	};

	const handleOrder = async () => {
		// console.log(cart);
		// const url = "http://localhost:5000/orders";
		const url = "http://localhost/dbmsCollege/orders.php";

		await Axios.post(url, cart).then(response => {
			console.log(response);
			if (response.data.msg === "Not Authorized") {
				setCart([]);
				history.push("/login");
			} else if (response.data.msg) {
				setStatus(response.data.msg);
				setCart([]);
				// setCart(cart.slice(0, 1));
			} else {
				setStatus(response.data.error);
			}
		});
	};

	return (
		<div className="Menu">
			<Nav
				color="add"
				// isLoggedIn={location.state && location.state.isLoggedIn}
				// isLoggedIn={state.isLoggedIn}
			/>

			{/* <h1>Items in the cart {cart.length}</h1> */}

			<section className="menu-banner">
				<div
					data-aos="fade-right"
					data-aos-easing="ease-in-out"
					data-aos-duration="1000"
				>
					<p>Our Offerd Menu</p>
					<h2>Some Trendy And Popular Courses Offerd</h2>
				</div>
			</section>
			<div className="menu-section">
				<section>
					<section>
						{/* <div className="menu-titles">
							<h1>Items in the cart {items}</h1>

							<h1>Total price is {total} Rupees</h1>
						</div> */}
						<div className="image-section">
							{api.map(file => (
								<div
									key={file.id}
									className="image-container"
									data-aos="fade-up"
									data-aos-easing="ease"
									data-aos-duration="900"
								>
									<img
										src={file.image}
										width="370"
										height="auto"
										alt="heludilla"
									/>
									<h5>{file.title}</h5>
									{/* <p>
							{file.description.substring(0, 500)}
							......
						</p> */}
									<span>&#8377;{file.price}</span>
									<button
										className="addToCart"
										onClick={() => addToCart(file)}
									>
										Add to cart
									</button>
								</div>
							))}
						</div>
					</section>
					<div className="cart">
						<div className="cart-titles">
							<h1>Cart re baba</h1>
							<h1>{status}</h1>
						</div>
						{/* {console.log(cart)} */}
						{cart.length === 0 ? (
							<h1 className="No-item">No items in the Cart</h1>
						) : (
							<>
								<div className="menu-titles">
									<h1>Items in the cart {items}</h1>

									<h1>Total price is {total} Rupees</h1>
								</div>
								<div className="cart-image">
									{cart.map(file => (
										<div
											key={file.id}
											className="image-container"
										>
											<img
												src={file.image}
												width="370"
												height="auto"
												alt="heludilla"
											/>
											<h5>{file.title}</h5>
											{/* <p>
							{file.description.substring(0, 500)}
							......
						</p> */}
											<span>Quantity: {file.count}</span>
											<span>&#8377;{file.tPrice}</span>
											<div className="extras-div">
												<button
													className="addToCart extras"
													onClick={() =>
														removeFromCart(file)
													}
												>
													-
												</button>
												<span id="count">
													{file.count}
												</span>
												<button
													className="addToCart extras"
													onClick={() =>
														addToCart(file)
													}
												>
													+
												</button>
											</div>
										</div>
									))}
								</div>
								<button
									className="addToCart place-order"
									onClick={handleOrder}
								>
									Place Order
								</button>
								{/* End of cart section */}
							</>
						)}
					</div>
				</section>
			</div>
			<Footer />
		</div>
	);
}

export default Menu;
