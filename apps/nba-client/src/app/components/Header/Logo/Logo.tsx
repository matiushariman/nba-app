import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <img
        width="48"
        height="28"
        src="https://cdn.nba.com/logos/leagues/logo-nba.svg"
        alt="NBA Logo"
      />
    </Link>
  );
};

export default Logo;
