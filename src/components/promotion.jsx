import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/shoppingAction";
import "../styles/promotion.css"

export const Promotion = (props) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const handleClick = () => {
      dispatch(addToCart('1613d058-4e43-4a59-bae1-3802e134a213'));
    };
    return (
      <div id="Promotion">
        <Grid container>
          <Grid item xs={12} lg={6}>
            <img
              src="img/portfolio/BesanaBeautyPack.png"
              className="img-responsive"
              alt=""
            />{" "}
          </Grid>
          <Grid item xs={12} lg={6} style={{ background: "white" }}>
            <div id="content-promotion">
              <Grid item xs={12} lg={12} style={{ paddingTop: 30 }}>
                <h>
                  {t("Promotion.TitleBesanaBeauty")}
                </h>
              </Grid>
              <Grid
                item
                xs={12}
                lg={12}
                style={{ paddingTop: 40, paddingBottom: 50 }}
              >
                <h2>
                  {t("Promotion.TextBesanaBeauty")}
               
                  {" "}
                  {t("Promotion.TextComplementaryBesanaBeauty")}
                </h2>
              </Grid>

              <Grid item xs={12} lg={12} style={{ paddingTop: 30 }}>
                <input
                  type="button"
                  class="button"
                  value={t("Promotion.Button")}
                  onClick={() => handleClick()}
                />
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    );
};
