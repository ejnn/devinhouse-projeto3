import styled from 'styled-components';


const Button = styled.button`
  cursor: pointer;
  font-size: 18px;
  line-height: 24px;
  height: 44px;
  color: white;
  background-color: #8000FF;
  border-radius: 4px;
  border: 0;
  outline: none;
  transition: 0.1s all ease-out;
  &:hover {
    box-shadow: 2px 2px 3px #00000077;
  }
  &:focus {
    box-shadow: 2px 2px 3px #00000077, 0px 0px 0px 1px #8000FF;
  }
  &:active {
    /* background-color: #8000FFCC; // as últimas duas letras é pra transparência, cc = 80% */
    transform: translate(0px, 3px);
    box-shadow: 2px 0px 3px #00000077, 0px 0px 0px 1px #8000FF;
  }
`;

export default function Test(props) {
  return (
      <Button onClick={props.function}>
        {props.children}
      </Button>
  );
}