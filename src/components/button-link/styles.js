import styled from "styled-components";
import { rem } from "polished";
import { device } from "../../../utils/breakpoints";

export const Button = styled.a`
  border: 3px solid ${({ borderColor }) => borderColor || "var(--darkBrown)"};
  border-radius: ${rem("999px")};
  background-color: ${({ bgColor }) => bgColor || "var(--lightBrown)"};
  width: max-content;
  height: ${rem("64px")};
  padding: 0 ${rem("32px")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: var(--fontBlack);
  text-transform: uppercase;
  text-decoration: none;
  color: var(--light);
  transition-duration: 300ms;
  cursor: pointer;

  svg {
    margin-right: ${rem("5px")};
    width: ${rem("50px")};
    height: ${rem("50px")};
  }

  @media ${device.s} {
    height: ${rem("84px")};
  }
`;

export default Button;
