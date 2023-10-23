import { Message } from './About.styled';

const About = () => (
  <Message>
    This application was created to demonstrate my skills to potential employers
    skills in working with HTML, CSS, JavaScript, React, React Router, and Redux
    Toolkit. This application was created without the Axios library to improve
    work skills with HTTP requests. Because under the hood of the Redux Toolkit
    is Immer - we can freely "mutate" the state, and Immer will do it correctly
    for us to update.
  </Message>
);

export default About;
