import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  color: #312e38;
  padding: 0 16px;
  margin-top: 16px;
  font-weight: 500;
  transition: background-color 0.2s;

  width: 100%;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
