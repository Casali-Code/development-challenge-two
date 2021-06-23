import styled from "styled-components";

export const Container = styled.form`
	position: relative;
	width: 100%;

	.discard {
		position: absolute;
		top: -1rem;
		right: 8rem;

		padding: 0.5rem;
		border: 0;
		border-radius: 0.25rem;

		background-color: #ff6666;
		color: var(--white);
		display: flex;
		align-items: center;
		justify-content: center;

		transition: all 0.2s ease;

		img {
			width: 1.5rem;
			height: 1.5rem;
			margin: 0 0 0 0.5rem;
		}
		&:hover {
			filter: brightness(0.9);
		}
	}
	.send {
		position: absolute;
		top: -1rem;
		right: -1rem;
		width: 8rem;

		padding: 0.5rem;
		border: 0;
		border-radius: 0.25rem;

		background-color: var(--lightblue);
		color: var(--white);
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;

		transition: all 0.2s ease;

		img {
			width: 1.5rem;
			height: 1.5rem;
			margin: 0 0 0 0.5rem;
		}
		&:hover {
			filter: brightness(1.1);
		}
	}

	h1 {
		color: var(--darkblue);
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
	input {
		padding: 0.25rem 0.75em;
		width: 100%;
		height: 3rem;
		border: 0;
		border-top: 1px solid var(--gray);
		border-bottom: 1px solid var(--gray);
		border-right: 1px solid var(--gray);
		border-radius: 0 1.5rem 1.5rem 0;
		font-weight: 400;
		font-size: 1rem;
		color: var(--darkblue);

		&::placeholder {
			color: var(--gray);
		}
	}

	.inputDiv {
		display: flex;
		align-items: center;
		width: 100%;
		height: 4rem;

		filter: brightness(0.98);
		transition: all 0.2s ease;

		h2 {
			width: 18rem;
			padding: 0 0.75rem;
			border-top: 1px solid var(--gray);
			border-bottom: 1px solid var(--gray);
			border-left: 1px solid var(--gray);
			border-radius: 1.5rem 0 0 1.5rem;
			line-height: 3rem;
			font-size: 1rem;
			background-color: var(--darkblue);
			color: var(--white);
			text-align: center;
		}

		&:hover {
			filter: brightness(1);
		}
	}
	.txtar {
		margin-top: 1rem;

		h2 {
			font-size: 1rem;
			margin-bottom: 1rem;
		}

		textarea {
			width: 100%;
			padding: 0.5rem;
			height: 8rem;
			border: 0;
			border: 1px solid var(--gray);
			border-radius: 1rem;
			resize: none;
			filter: brightness(0.95);

			transition: all 0.2s ease;

			&:hover {
				filter: brightness(1);
			}
		}
	}
`;
