import { useHistory } from 'react-router-dom'

import Button from 'components/Button'
import { GoBackWrapper } from './GoBackButton.styled'

const GoBackButton = () => {
  const history = useHistory()

  return (
    <GoBackWrapper>
      <Button onClick={history.goBack}>Voltar</Button>
    </GoBackWrapper>
  )
}
export default GoBackButton
