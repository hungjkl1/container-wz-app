import styled from 'styled-components';

const A = styled.a`
  position: relative;
  padding-top: 0.7rem;
  padding-bottom: 0.2rem;
  padding-left: 1.6rem;
  min-height: 3.6rem;
  border-left: 0.3rem solid transparent;
  cursor: pointer;
  color: #dbdbdb;
  text-decoration: none;
  display: block;
  -webkit-font-smoothing: antialiased;

  &:hover {
    color: #000;
    background: #f0a500;

    border-left: 0.3rem solid #cf7500;
    text-decoration: none;
  }

  &:focus {
    color: #f0a50;
    text-decoration: none;
  }

  &:visited {
    color: #f0a50;
  }

  &.linkActive {
    color: #cf7500;
    border-left: 0.3rem solid #cf7500;
  }
`;

export default A;
