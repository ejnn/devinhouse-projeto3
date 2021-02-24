import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const PositionButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BackButton = styled.button`
  width: 226px;
  height: 44px;
  background: #8000FF;
  border-radius: 4px;
  cursor: pointer;
  
  color: #FFF;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
`;

const BotaoVoltar = () => {
  const history = useHistory();
  return(
    <PositionButton>
      <BackButton onClick={history.goBack}>Voltar</BackButton>
    </PositionButton>
  );
}

export default BotaoVoltar;
