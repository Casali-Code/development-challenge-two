import styled from "styled-components";

export const Container = styled.div`
	margin: 10rem auto 3rem;
	padding: 0.5rem;
	max-width: 1120px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
	gap: 2rem 0.5rem;
	justify-content: center;
`;
