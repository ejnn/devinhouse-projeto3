import { useHistory } from 'react-router-dom';
import { HomeLink, SShopeeLogo } from './ShopeeLogo.styled'

export default function ShopeeLogo() {
  const history = useHistory();

  const onEnter = (event) => {
    if (event.key == 'Enter') {
      history.push('/')
    }
  }

  return (
    <HomeLink to='/'>
      <SShopeeLogo>Shopee</SShopeeLogo>
    </HomeLink>
  )
}
