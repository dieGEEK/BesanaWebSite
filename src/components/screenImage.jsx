import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/shoppingAction";

export const Publicity = (props) => {
  const isSmallDevice = window.innerWidth < 650;
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToCart('a3661371-34ec-4192-bf2c-0e92489f1d52'));
  };
  return (
    <div id="publicity" style={{ paddingTop: isSmallDevice && 40, background: "white" }}>
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
          <div style={{ marginLeft: "100px" }}>
            <Grid item xs={12} lg={12} style={{ padding: 30 }}>
              <h2 style={{ fontSize: "45", color: "#ce7a55" }} class="allegoryFont">
                {t("Publicity.Title")}
              </h2>
              <h2 style={{ fontSize: "45", color: "#ce7a55" }} class="allegoryFont">
                {t("Publicity.Subtitle")}
              </h2>
            </Grid>
            <Grid item xs={12} lg={12} style={{ paddingLeft: 30 }}>
              <h style={{ fontSize: 35, color: "black" }}>
                {t("Publicity.FirstProduct")}
              </h>
            </Grid>
            <Grid
              item
              xs={12}
              lg={12}
              style={{ paddingTop: 10, paddingLeft: 30 }}
            >
              <h style={{ fontSize: 15, color: "black", fontWeight: 700 }}>
                {t("Publicity.DescriptionFirstProduct").replace(
                  "tu piel sin sensación grasosa. Perfecto debajo de tu maquillaje o cualquier momento.",
                  ""
                )}
              </h>
              <h style={{ fontSize: 15, color: "#716C6A" }}>
                {t("Publicity.DescriptionFirstProduct").replace(
                  "Hidrata, Trata y Protege",
                  ""
                )}
              </h>
            </Grid>
            <Grid
              item
              xs={12}
              lg={12}
              style={{ paddingTop: 10, paddingLeft: 30 }}
            >
              <h style={{ fontSize: 35, color: "black" }}>
                {t("Publicity.SecondProduct")}
              </h>
            </Grid>
            <Grid
              item
              xs={12}
              lg={12}
              style={{ paddingTop: 10, paddingLeft: 30 }}
            >
              <h style={{ fontSize: 15, color: "#716C6A" }}>
                {t("Publicity.DescriptionSecondProduct").replace(
                  "más suave, renovada e hidratada. Tus amigos querrán saber tu secreto.",
                  ""
                )}
              </h>
              <h style={{ fontSize: 15, color: "black", fontWeight: 700 }}>
                {t("Publicity.DescriptionSecondProduct")
                  .replace("Despierta con una piel ", "")
                  .replace("Tus amigos querrán saber tu secreto.", "")}
              </h>
              <h style={{ fontSize: 15, color: "#716C6A" }}>
                {t("Publicity.DescriptionSecondProduct").replace(
                  "Despierta con una piel más suave, renovada e hidratada.",
                  ""
                )}
              </h>
            </Grid>
            <Grid item xs={12} lg={12} style={{ padding: 30 }}>
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
