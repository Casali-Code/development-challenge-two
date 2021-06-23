import styled from "styled-components";

export const Container = styled.div`
	border: 1px solid var(--gray);
	border-radius: 0.5rem;

	background-color: var(--white);
	box-shadow: 1px 1px 4px #dddddd;

	width: 35rem;
	margin: 0 auto;
	padding: 1rem;

	position: relative;

	transition: all 0.2s ease;

	&:hover {
		box-shadow: 2px 2px 6px #bbbbff;
	}

	button {
		width: 2rem;
		height: 2rem;
		border: 0;
		border-radius: 0.25rem;

		transition: filter 0.2s ease;

		&:hover {
			filter: brightness(0.9);
		}

		img {
			width: 1rem;
		}
	}

	.delete {
		background-color: #ff6666;
		position: absolute;
		right: 0.75rem;
		top: 0.75rem;
	}
	.edit {
		background-color: #ffcc66;
		position: absolute;
		right: 3.25rem;
		top: 0.75rem;
	}
`;
export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	strong {
		color: var(--darkblue);
	}

	p {
		color: var(--gray);
	}

	h1 {
		font-size: 1.6rem;
	}

	.infos {
		margin: 1.5rem 0;

		display: grid;
		grid-template-columns: 16fr 8fr;
		gap: 1rem;

		p {
			color: var(--lightblue);
		}

		.infodesc {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
`;
