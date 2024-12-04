import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.line}>
      <div style={{ padding: '13px' }}>
        <img src="/src/icons/logo.svg" alt="Logo" />
      </div>
      <div style={{ marginTop: '40px' }}>
        <img src="/src/icons/BurgerLogo.svg" alt="BurgerLogo" />
      </div>
    </div>
  );
};

export default Header;
