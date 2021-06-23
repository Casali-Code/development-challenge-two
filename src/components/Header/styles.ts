import styled from "styled-components";

export const Container = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;

	border-bottom: 1px solid var(--gray);
	background-color: var(--white);
	box-shadow: 3px 0 3px var(--gray);

	z-index: 10;
`;

export const Content = styled.div`
	max-width: 1120px;
	height: 8rem;
	margin: 0 auto;
	padding: 0 1rem;

	display: flex;
	justify-content: space-between;
	align-items: center;

	.logo {
		display: flex;
		align-items: center;

		img {
			height: 3rem;
		}
		h1 {
			font-weight: 700;
			margin-left: 1rem;
			color: var(--darkblue);
			user-select: none;
		}
	}

	button {
		font-size: 1rem;
		font-weight: 600;

		background-color: var(--darkblue);
		color: var(--white);

		border: 0;
		border-radius: 0.25rem;
		padding: 0.75rem 2rem;

		transition: filter 0.2s ease;

		&:hover {
			filter: brightness(1.3);
		}
	}
`;
