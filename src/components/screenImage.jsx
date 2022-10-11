import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/shoppingAction";
import "../styles/promotion.css"

export const Publicity = (props) => {
  const isSmallDevice = window.innerWidth < 650;
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToCart('a3661371-34ec-4192-bf2c-0e92489f1d52'));
  };
  return (
    <div id="publicity">
      <span></span>

      <Grid container>
        {isSmallDevice && (
          <Grid item xs={12} lg={6}>
            <img
              src="img/portfolio/DayNightPack.jpg"
              className="img-responsive"
              alt=""
            />{" "}
          </Grid>
        )}
        <Grid item xs={12} lg={6}>
          <div style={{ marginLeft: "100px", marginTop: "40px" }}>
            <Grid item xs={12} lg={12}>
              <h>
                {t("Publicity.Title")}
              </h>
              <h>
                {t("Publicity.Subtitle")}
              </h>
            </Grid>
            <Grid item xs={12} lg={12}>
              <h2>
                {t("Publicity.FirstProduct")}
              </h2>
            </Grid>
            <Grid
              item
              xs={12}
              lg={12}
            >
              <h3>
                {t("Publicity.DescriptionFirstProduct").replace(
                  "tu piel sin sensación grasosa. Perfecto debajo de tu maquillaje o cualquier momento.",
                  ""
                )}

                {t("Publicity.DescriptionFirstProduct").replace(
                  "Hidrata, Trata y Protege",
                  ""
                )}
              </h3>
            </Grid>
            <Grid
              item
              xs={12}
              lg={12}
            >
              <h2>
                {t("Publicity.SecondProduct")}
              </h2>
            </Grid>
            <Grid
              item
              xs={12}
              lg={12}
            >
              <h3>
                {t("Publicity.DescriptionSecondProduct").replace(
                  "más suave, renovada e hidratada. Tus amigos querrán saber tu secreto.",
                  ""
                )}

                {t("Publicity.DescriptionSecondProduct")
                  .replace("Despierta con una piel ", "")
                  .replace("Tus amigos querrán saber tu secreto.", "")}

                {t("Publicity.DescriptionSecondProduct").replace(
                  "Despierta con una piel más suave, renovada e hidratada.",
                  ""
                )}
              </h3>
            </Grid>
            <Grid item xs={12} lg={12}>
              <input
                type="button"
                class="button"
                value={t("Publicity.Button")}
                onClick={() => handleClick()}
              />
            </Grid>
          </div>
        </Grid>
        {!isSmallDevice && (
          <Grid item xs={12} lg={6}>
            <img
              src="img/portfolio/DayNightPack.jpg"
              className="img-responsive"
              alt=""
            />{" "}
          </Grid>
        )}
      </Grid>
    </div>
  );
};
