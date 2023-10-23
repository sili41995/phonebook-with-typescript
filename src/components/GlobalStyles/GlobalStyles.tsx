import { Global, css } from '@emotion/react';
import 'modern-normalize';
import { juaRegular, interMedium, interSemiBold } from 'fonts';

const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Jua';
        src: local('Jua'), url(${juaRegular}) format('truetype');
        font-weight: 400;
      }

      @font-face {
        font-family: 'Inter';
        src: local('Inter'), url(${interMedium}) format('truetype');
        font-weight: 500;
      }

      @font-face {
        font-family: 'Inter';
        src: local('Inter'), url(${interSemiBold}) format('truetype');
        font-weight: 600;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-y: scroll;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
      }

      ul,
      ol {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      img {
        display: block;
        max-width: 100%;
        object-fit: cover;
      }

      button {
        cursor: pointer;
      }
    `}
  />
);

export default GlobalStyles;
