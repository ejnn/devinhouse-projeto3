import { useHistory } from 'react-router-dom';

import Button from "components/Button";

const GoBackButton = () => {

  const history = useHistory();
  
  return (
      <Button onClick={history.goBack}>Voltar</Button>
  );
}
export default GoBackButton;
