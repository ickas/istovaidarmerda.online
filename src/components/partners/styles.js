import styled from "styled-components";
import { rem } from "polished";

export const Wrapper = styled.section`
  background-color: var(--yellow);
  padding: 100px;
  text-align: center;
`;

export const Logos = styled.div`
  --itemWidth: 250px;
  width: min-content;
  margin: 50px auto 0 auto;

  ul {
    margin: 0;
    display: grid;
    grid-template-columns: repeat(4, var(--itemWidth));
    grid-gap: 50px;
    padding: 0;
  }
`;

export const Logo = styled.li`
  list-style: none;
  position: relative;
  border-radius: ${rem("50px")};
  background-color: ${({ bg }) => bg || "var(--light)"};
  width: var(--itemWidth);
  height: var(--itemWidth);
  box-shadow: 0 0 ${rem("50px")} rgba(33, 33, 33, 0.25);
  transition-duration: 0.5s;

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 180px;
      max-height: 150px;
    }
  }

  &:hover {
    box-shadow: 0 0 ${rem("75px")} rgba(33, 33, 33, 0.5);
  }
`;
