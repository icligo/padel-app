import logo from '../../assets/icligo-logo.png';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className="tw-flex tw-items-center tw-justify-center">
      <img src={logo} className={styles.logo_icon} alt="iCliGo logo" />
    </div>
  );
};

export default Header;
