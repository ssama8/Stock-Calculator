import React from "react";
import logo from "../images/trend.png";
import styled from "styled-components";
const Navbar = () => {
	return (
		<Wrapper>
			<ul>
				<li>
					<img src={logo} alt='stockmarket logo ' />
				</li>
				<li>
					<h3>Stock Calculator</h3>
				</li>
			</ul>
		</Wrapper>
	);
};

const Wrapper = styled.nav`
	background-color: #333;
	margin-bottom: 2rem;
	ul {
		height: 5rem;
		display: flex;
		width: 80vw;
		margin: 0 auto;
		max-width: 1000px;
		justify-content: space-between;
		list-style: none;
		align-items: center;
		color: white;
	}

	img {
		height: 50px;
	}
`;

export default Navbar;
