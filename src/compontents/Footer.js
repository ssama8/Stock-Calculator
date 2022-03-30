import React from "react";

const Footer = () => {
	return (
		<footer>
			<h4>
				Stock Calculator &copy; {new Date().getFullYear().toString()} all rights
				reserved{" "}
			</h4>
		</footer>
	);
};

export default Footer;
