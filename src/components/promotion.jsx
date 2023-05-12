import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/shoppingAction";
import "../styles/promotion.css";
import toast, { Toaster } from 'react-hot-toast';

export const Promotion = (props) => {
    const { t, i18n } = useTranslation();
    const isSmallDevice = window.innerWidth < 900;
    const dispatch = useDispatch();
    const handleClick = () => {
      dispatch(addToCart('1613d058-4e43-4a59-bae1-3802e134a213'));
      toast.success(t("Gallery.AddSucces"));
    };
    return (
      <div id="promotion">
        <div><Toaster/></div>
        <Grid container>
          <Grid item xs={12} lg={6}>
            <img
              src="img/portfolio/BesanaBeautyPack.png"
              className="img-responsive"
              alt=""
            />{" "}
          </Grid>
          <Grid item xs={12} lg={6}>
            <div id="content-promotion">
              <Grid item xs={12} lg={12} style={{ paddingTop: isSmallDevice ? 10 : 30 }}>
                <h>
                  {t("Promotion.TitleBesanaBeauty")}
                </h>
              </Grid>
              <Grid item xs={12} lg={12} style={{ paddingTop: isSmallDevice ? 20 : 40, paddingBottom: isSmallDevice ? 10 : 50 }}>
                <h2>
                  {t("Promotion.TextBesanaBeauty")}
                </h2>
                <h3>
                  {t("Promotion.TextComplementaryBesanaBeauty")}
                </h3>
              </Grid>

              <Grid item xs={12} lg={12} style={{ paddingTop: isSmallDevice ? 15 : 30 }}>
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
