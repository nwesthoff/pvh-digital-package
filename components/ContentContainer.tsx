import styled from "styled-components";
import { theme } from "../config/theme";

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${(props: { wide?: boolean }) =>
    props.wide ? "1200px" : "900px"};

  @media (max-width: ${theme.breakpoints.phone}px) {
    padding: 1.2rem;
  }
`;

export default ContentContainer;
