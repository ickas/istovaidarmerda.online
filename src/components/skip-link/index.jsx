// Libraries
import React from "react";
import styled from "styled-components";
import { arrayOf, shape } from "prop-types";
import { SkipLink, propTypes as ITEM } from "./link";

// Styling
const Wrapper = styled.nav`
  width: 100%;
`;

/**
 * @typedef {object} ISkipLinksProps
 *
 * @property {import("./link").ISkipLink[]} items
 */

/**
 * @description Skip Link to Main Content
 * @author  João Dias
 * @param {ISkipLinksProps} props
 * @returns {JSX.Element}
 */
const SkipLinks = ({ items }) => (
  <Wrapper>
    {items.map((item) => (
      <SkipLink key={item.target} target={item.target} text={item.text} />
    ))}
  </Wrapper>
);

SkipLinks.propTypes = {
  items: arrayOf(shape(ITEM)).isRequired,
};

export default SkipLinks;
