import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { lighten } from "polished";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'IBM Plex Sans', sans-serif;
    scroll-behavior: smooth;
  }

  p, li {
    font-size: 1.2rem;
    line-height: 1.6em;

    @media (max-width: ${theme.breakpoints.tablet}px) {
      font-size: 1rem;
    }
  }

  a {
    color: black;
  }

  blockquote {
    font-family: 'IBM Plex Serif', serif;
    font-style: italic;
    font-size: 2rem;
    line-height: 1.3em;
    color: ${theme.colors.primary};

    &.small {
      font-size: 1.4rem;
    }

    @media (max-width: ${theme.breakpoints.phone}px) {
      font-size: 1.3rem;
      margin: 2rem 1.2rem;
    }

    .quoteBy {
      text-align: end;
      display: block;
      color: #b3b3b3;
      font-size: 1.2rem;

      a {
        color: #b3b3b3;

        &:hover {
          color: ${theme.colors.primary};
        }
      }

      &:before {
        content: "— "
      }
    }
  }

  figure {
    margin: 2rem 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  img, video {
    max-width: 100%;
    height: auto;
  }

  figcaption {
    margin-top: 1.2rem;
    text-align: center;
    font-style: italic;
  }

  h1 {
    font-size: 6rem;
   
    @media (max-width: ${theme.breakpoints.tablet}px) {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 2.5rem;

    @media (max-width: ${theme.breakpoints.tablet}px) {
      font-size: 1.6rem;
    }
  }

  h3 {
    color: ${theme.colors.primary};
    font-size: 1.5rem;
  }

  h4 {
    color: ${lighten(0.15, theme.colors.primary)};
    font-size: 1.1rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: .4rem;
  }

  body {
    background-color: #fff;
    margin: 0;
    padding: 0;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* FLICKITY */

  .flickity-enabled {
    position: relative;
  }

  .flickity-enabled:focus {
    outline: none;
  }

  .flickity-viewport {
    position: relative;
    height: 100%;
  }

  .flickity-slider {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  /* draggable */

  .flickity-enabled.is-draggable {
    -webkit-tap-highlight-color: transparent;
    tap-highlight-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .flickity-enabled.is-draggable .flickity-viewport {
    cursor: move;
    cursor: -webkit-grab;
    cursor: grab;
  }

  .flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }

  /* ---- flickity-button ---- */

  .flickity-button {
    position: absolute;
    background: hsla(0, 0%, 100%, 0.75);
    border: none;
    color: #333;
  }

  .flickity-button:hover {
    background: white;
    cursor: pointer;
  }

  .flickity-button:focus {
    outline: none;
    box-shadow: 0 0 0 5px #19f;
  }

  .flickity-button:active {
    opacity: 0.6;
  }

  .flickity-button:disabled {
    opacity: 0.3;
    cursor: auto;
    /* prevent disabled button from capturing pointer up event. #716 */
    pointer-events: none;
  }

  .flickity-button-icon {
    fill: #333;
  }

  /* ---- previous/next buttons ---- */

  .flickity-prev-next-button {
    top: 50%;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    /* vertically center */
    transform: translateY(-50%);
  }

  .flickity-prev-next-button.previous {
    left: 10px;
  }
  .flickity-prev-next-button.next {
    right: 10px;
  }
  /* right to left */
  .flickity-rtl .flickity-prev-next-button.previous {
    left: auto;
    right: 10px;
  }
  .flickity-rtl .flickity-prev-next-button.next {
    right: auto;
    left: 10px;
  }

  .flickity-prev-next-button .flickity-button-icon {
    position: absolute;
    left: 20%;
    top: 20%;
    width: 60%;
    height: 60%;
  }

  /* ---- page dots ---- */

  .flickity-page-dots {
    position: absolute;
    width: 100%;
    bottom: -25px;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    line-height: 1;
  }

  .flickity-rtl .flickity-page-dots {
    direction: rtl;
  }

  .flickity-page-dots .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 8px;
    background: #333;
    border-radius: 50%;
    opacity: 0.25;
    cursor: pointer;
  }

  .flickity-page-dots .dot.is-selected {
    opacity: 1;
  }
`;

export default GlobalStyle;
