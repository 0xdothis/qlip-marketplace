import React from "react";
import styled from "styled-components/macro";

function NotFound() {
  const [timer, setTimer] = React.useState(15);

  React.useEffect(() => {
    // Redirect to homepage after 3 seconds

    const redirectTimer = setInterval(() => {
      setTimer((timer) => {
        if (timer === 0) {
          window.location.href = "/";
          return timer;
        }
        return timer - 1;
      });
    }, 1000);

    // Cleanup the timer on component unmount
    return () => clearInterval(redirectTimer);
  }, []);

  return (
    <Wrapper>
      <Heading>404</Heading>
      <Text>You will be redirected to the homepage in {timer} seconds</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 6rem;
  color: var(--color-white);
`;

const Text = styled.p`
  font-size: 1.5rem;
  color: var(--color-text-dark);
  /* margin-top: 1rem; */
`;
export default NotFound;
