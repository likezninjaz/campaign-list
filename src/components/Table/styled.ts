import styled, { css } from 'styled-components';

interface IIndicator {
  active: boolean
}

export const Indicator: any = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: green;

  ${({ active }: IIndicator) => !active && css`
    background-color: red;
  `}
`;