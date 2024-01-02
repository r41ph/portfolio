import styled from "styled-components";

export const FormErrorWrapper = styled.div<{ $error: string }>`
  /* margin: ${({ $error }) => ($error ? "0 0 0.5rem 0" : "0")}; */
  background-color: ${({ $error }) => ($error ? "#ffcdd2" : "none")};
  padding: ${({ $error }) => ($error ? "0.5rem" : "0")};
  border-left: ${({ $error }) => ($error ? "3px solid tomato" : "0")};
`;
