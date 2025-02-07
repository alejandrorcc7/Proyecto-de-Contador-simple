import React, { useEffect, useState } from "react";

import { contadorSimple } from "./contadorSimple.jsx";

//create your first component
const Home = () => {

	const [timer, setTimer] = useState(0)
	const [active, setActive] = useState(false)


	useEffect(() => {
		setTimeout(() => {
			setTimer(value => value + 1)
		}, 1000)
	}, [timer])

	return (
		<main className="text-center">
			<section className="counter-holder">
				<contadorSimple number={<span className="fa-regular fa-clock"></span>} />
				<contadorSimple number={Math.floor(timer / 100000) % 10} />
				<contadorSimple number={Math.floor(timer / 10000) % 10} />
				<contadorSimple number={Math.floor(timer / 1000) % 10} />
				<contadorSimple number={Math.floor(timer / 100) % 10} />
				<contadorSimple number={Math.floor(timer / 10) % 10} />
				<contadorSimple number={Math.floor(timer % 10)} />
			</section>
		</main>
	);
};

export default Home;