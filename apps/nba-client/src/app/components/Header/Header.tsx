import Logo from './Logo';
import GithubLogo from './assets/github-mark-white.svg';

const Header = () => (
  <div className="dark:bg-[#000] text-white pl-8 pr-8 pt-3 pb-3 flex justify-between items-center">
    <Logo />
    <a
      href="https://github.com/matiushariman/nba-app"
      target="_blank"
      className="text-sm"
      rel="noreferrer"
    >
      <img src={GithubLogo} alt="github logo" width={24} height={24} />
    </a>
  </div>
);

export default Header;
