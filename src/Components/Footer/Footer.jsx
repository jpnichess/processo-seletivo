import "./footer.scss";
import footer_logo from "../../assets/Logos/footer_logo.svg";
import social_media_icons from "../../assets/Icons/SocialMedia/social_media_icons.png";


function Footer() {
  return (
    <div className="footer_wrapper">
      <div className="footer">
        <img src={footer_logo} alt="" />

        <div className="social_media">
          <img src={social_media_icons} alt="social_media" />
        </div>

        <div className="company">
          <h1>Sobre a Empresa</h1>
          <p>Quem somos</p>
          <p>Fale conosco</p>
        </div>

        <div className="policy">
          <h1>Políticas</h1>
          <p>Política de Privacidade</p>
          <p>Termos de Uso</p>
          <p>Política de Entrega</p>
          <p>Política de Cupom e Descontos</p>
        </div>
      </div>
    </div>
  );
}


export default Footer;
