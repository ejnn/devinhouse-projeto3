import { useHistory } from 'react-router-dom';
import { PositionButton, BackButton } from 'components/BotaoVoltar/BotaoVoltar.styled'

const BotaoVoltar = () => {
  const history = useHistory();
  return(
    <PositionButton>
      <BackButton onClick={history.goBack}>Voltar</BackButton>
    </PositionButton>
  );
}

export default BotaoVoltar;
