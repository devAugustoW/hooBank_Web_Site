import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Encontre melhores ofertas de cartão <br className="sm:block hidden" /> em poucos passos.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Com a inteligência artificial do nosso banco, conseguimos as melhores ofertas de cartão para o seu perfil de consumo
      </p>

      <a href="#"><Button styles={`mt-10`} /></a>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
