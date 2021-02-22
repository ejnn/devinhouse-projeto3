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
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.square) ? "44px" : "100%"};
  &:hover {
    box-shadow: 2px 2px 3px #00000077;
  }
  &:focus {
    box-shadow: 2px 2px 3px #00000077, 1px 1px 0px 1px #8000FF;
  }
  &:active {
    /* background-color: #8000FFCC; // as últimas duas letras é pra transparência, cc = 80% */
    transform: translate(1px, 1px);
    box-shadow: 1px 0px 2px #00000050;
  }
`;

export default function Test(props) {
  const { square, action } = props;
  return (
      <Button onClick={action} square={square} >
        {props.children}
      </Button>
  );
}