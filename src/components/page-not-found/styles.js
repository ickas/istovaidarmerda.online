import styled from "styled-components";
import { rem } from "polished";

export const Wrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${rem("30px")};

  img {
    margin-bottom: 10px;
    max-width: 100%;
    height: auto;
  }

  p {
    margin: 0;
    margin-bottom: 50px;
    font-weight: var(--fontRegular);
  }
`;
