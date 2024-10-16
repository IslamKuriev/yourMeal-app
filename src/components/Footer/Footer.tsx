import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerMain}>
      <div>
        <img src="/src/icons/footerLogo.png" alt="" />
        <br />
        <span>© YouMeal, 2024</span>
      </div>
      <div>
        <div style={{ marginBottom: "5px" }}>Номер для заказа</div>
        <span>+7(930)833-**-**</span>
      </div>
      <div>
        <div style={{ marginBottom: "10px" }}>Мы в соцсетях</div>
        <img src="/src/icons/social.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
