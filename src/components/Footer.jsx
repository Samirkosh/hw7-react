import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <FooterBlock>
        <h2>О нас</h2>
        <p>О компании</p>
        <p>Контакты</p>
        <p>Пользовательское соглашение</p>
        <p>Политика конфиденциальности</p>
      </FooterBlock>
      <FooterBlock>
        <h2>Помощь</h2>
        <p>F.A.Q.</p>
        <p>Сообщить об ошибке</p>
      </FooterBlock>
      <FooterBlock>
        <h2>Социальные сети</h2>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Telegram</p>
      </FooterBlock>
      <FooterBlock>
        <h2>Скачать приложение</h2>
        <FooterApplications className="footer_applications">
          <img src="https://shorturl.at/ZIHmH" alt="" />
          <img src="https://etnomedia.tv/assets/svgs/appstore.svg" alt="" />
          <img
            src="https://etnomedia.tv/assets/svgs/microsoft-store.svg"
            alt=""
          />
        </FooterApplications>
      </FooterBlock>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  background-color: black;
  padding: 30px;
  justify-content: space-around;
`;

const FooterBlock = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FooterApplications = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  img {
    width: 150px;
  }
`;
