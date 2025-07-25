import { useLocation } from 'react-router-dom';
import SiteLogo from '../../../assets/images/logo.svg';
import WhiteLogo from '../../../assets/images/whitelogo.png';
import { Link } from 'react-router-dom';

const HeaderLogo = () => {
  const location = useLocation();

  const isHome = location.pathname === '/'; 

  return (
    <Link to="/">
      <img
      className='sitelogo'
        src={isHome ? SiteLogo : WhiteLogo}
        alt="Site Logo"
      />
    </Link>
  );
};

export default HeaderLogo;
