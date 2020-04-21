import styled from 'styled-components';

const EmptyLinksList = styled.span`
  min-height: 3.6rem;
  padding: 0.6rem 1.6rem 2.6rem 0;
  font-size: 1.4rem;
  font-weight: 400;
  color: #f0a500;
`;

EmptyLinksList.defaultProps = {
  theme: {
    main: {
      colors: {
        white: '#f0a500',
      },
    },
  },
};

export default EmptyLinksList;
