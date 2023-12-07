import { FC } from 'react';
import { Message } from './About.styled';

const About: FC = () => (
  <Message>
    This app was developed for demonstrate to showcase my skills in HTML, CSS,
    JavaScript, TypeScript, React, React Router, and Redux Toolkit to future
    employers. A server application was developed to securely store information.
    This application was developed without the Axios to improve skills in
    working with HTTP requests. Because under the hood of the Redux Toolkit is
    Immer - we can freely "mutate" the state, and Immer will do it right to keep
    us updated.
  </Message>
);

export default About;
