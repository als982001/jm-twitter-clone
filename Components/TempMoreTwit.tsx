import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: yellow;
`;

interface IProps {
  onClick: () => void;
}

export default function TempMoreTwit({ onClick }: IProps) {
  return <Button onClick={onClick}>더 보기!</Button>;
}
