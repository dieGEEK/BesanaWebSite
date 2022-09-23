import { Navigation } from "./navigation";
import { useTranslation } from 'react-i18next';

export const Company = (data) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Navigation style={{ backgroundColor: "#ffffff" }}/>
      <div id="company" style={{ paddingTop: 160, backgroundColor: "#ffffff", width: '100%' }}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <div style={{ padding: 20 }} >
                <h2 className="typewriter-text allegoryFont" style={{ color: 'black', textShadow: 'none' }}>{t("Company.AboutUs")}</h2>
                <hr class="social-line"/>
                <h3 style={{ fontSize: 17 }}>{t("Company.Description")}</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion">
        <div class="box a1">
          <div class="image">
            <div class="text-accordion">
              <h2>Visión</h2>
              <p>
                Convertirnos en una empresa líder dentro de la industria,
                además brindar a nuestros socios y clientes productos innovadores
                y a la vez que aporten un beneficio.
              </p>
            </div>
          </div>
        </div>
        <div class="box a3">
          <div class="image_3">
            <div class="text-accordion">
              <h2>Misión</h2>
              <p>
             
              </p>
            </div>
          </div>
        </div>
        <div class="box a4">
          <div class="image_4">
            <div class="text-accordion">
              <h2>Filosofía</h2>
              <p>
              
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
