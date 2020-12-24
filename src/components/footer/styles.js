import styled from "styled-components";

export const Wrapper = styled.footer`
  background-color: var(--lightBrown);
  padding: 100px 100px 50px 100px;
  color: var(--light);
`;

export const FooterMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  text-align: center;

  h3 {
    margin-bottom: 30px;
    text-transform: uppercase;
    font-size: 1rem;
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;

      &:not(:last-child) {
        margin-bottom: 10px;
      }

      a {
        color: var(--light);
        text-decoration: none;
        transition-duration: 0.3s;

        &:hover {
          color: var(--darkBrown);
        }
      }
    }
  }
`;

export const Copyright = styled.div`
  margin-top: 50px;
  font-size: 0.85rem;
  text-align: center;
  color: var(--light);
`;
