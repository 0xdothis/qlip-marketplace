import React from "react";
import styled from "styled-components/macro";

function VisuallyHidden({ children, ...delegate }) {
  const [forceShow, setForceShow] = React.useState(false);

  React.useEffect(function () {
    if (import.meta.env.MODE !== "production") {
      const handleKeyDown = (event) => {
        if (event.key === "Alt") {
          setForceShow(true);
        }
      };

      const handleKeyUp = () => {
        setForceShow(false);
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return children;
  }

  return <Wrapper {...delegate}>{children}</Wrapper>;
}

const Wrapper = styled.span`
  position: absolute;
  overflow: hidden;
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

export default VisuallyHidden;
