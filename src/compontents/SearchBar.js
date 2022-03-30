import React from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";
const SearchBar = () => {
	const { label } = useGlobalContext();
	return (
		<Wrapper>
			<div className='search-container'>
				<input
					type='text'
					name='searchbar'
					id='searchbar'
					value={label}
					placeholder='find stock '
				/>
				<button type='submit'>
					{/* <BsSearch /> */}
					Search
				</button>
			</div>
		</Wrapper>
	);
};
const Wrapper = styled.section`
	.search-container {
		width: min-content;
		margin: 0 auto;
		display: flex;
		align-items: center;
		border: 0.5px solid #aaa;
		padding: 0.5rem;
		button {
			margin: 0;
			padding: 0.5rem;
			border: 1px solid #eee;
			font-size: 0.75rem;
			background: lightblue;
			color: #333;
			border-radius: 5px;

			// background-color: green;
		}
	}
	input {
		margin: 0 0.25rem;
		width: 30vw;
		border: 1px solid #bbb;

		padding: 0.5rem;
	}
	// input:focus {
	// 	border: 1 px solid #333;
	// 	background-color: #ddd;
	// }
	// display: none;
`;

export default SearchBar;
