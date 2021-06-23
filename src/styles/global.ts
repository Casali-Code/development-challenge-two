import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;

        --black: #000;
        --gray: #969cb3;
        --white: #fff;

        --lightblue: #009adf;
        --darkblue: #002639;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (min-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .modal {
        width: 100%;
        max-width: 560px;
        display: flex;
        position: relative;
        padding: 3rem;

        background-color: var(--background);
        border-radius: 0.25rem;

		z-index: 30;
	}

	.overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        background: rgba(0,0,0,0.6);

		z-index: 30;
	}

`;
