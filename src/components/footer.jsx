
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { MdLocationOn, MdPhoneEnabled } from "react-icons/md"
import { FaEnvelope } from "react-icons/fa"
import { useTranslation } from 'react-i18next';
import "../styles/footer.css";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center'
}));


export const Footer = (props) => {
    const isSmallDevice = window.innerWidth < 650;
    const { t, i18n } = useTranslation();
    return (
      <div id="footer">
        <div id="contact">
          <div className="container" >
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3} style={{ textAlign: "center" }}>
                <Grid item sx={3} lg={3}>
                  <p>{t("Footer.FindUs")}</p>
                  <br />
                  <a href="" className="social-icons">
                    <i className="fa fa-facebook-square" spacing={3}></i>
                  </a>
                  <a href="" className="social-icons">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="" className="social-icons">
                    <i className="fa fa-twitter"></i>
                  </a>
                </Grid>
                <Grid item sx={6} lg={6} alignContent={"center"}>
                  <img
                    height="80px"
                    src="img/about1.png"
                    class="custom-logo"
                    alt=""
                    srcset="img/about1.png"
                  ></img>
                </Grid>
                <Grid item sx={3} lg={3} style={{ textAlign: "left" }}>
                  <p>{t("Footer.Payments")} </p>
                  <br />
                  <a href="" className="social-icons">
                    <i className="fa fa-cc-visa"></i>
                  </a>
                  <a href="" className="social-icons">
                    <i className="fa fa-cc-mastercard"></i>
                  </a>
                  <a href="" className="social-icons">
                    <i className="fa fa-cc-paypal"></i>
                  </a>
                </Grid>
              </Grid>
            </Box>
            <div className="col-md-12" style={{ marginTop: 20 }}>
              <div className="row">
                <hr className="social-line" />
                <div className="social">
                  <Grid container style={{ textAlign: "initial", flexDirection: isSmallDevice ? "column" : "row" }}>
                    <Grid item sx={3} lg={3}>
                      <h3>{t("Footer.Company")}</h3>
                      <h4>
                        <span class="nav-arrow fa fa-angle-right"> </span>
                        {t("Footer.AboutUs")}
                      </h4>
                      <h4>
                        <span class="nav-arrow fa fa-angle-right"> </span>
                        {t("Footer.Shop")}
                      </h4>
                    </Grid>
                    <Grid item sx={3} lg={3} style={{ paddingLeft: "15px" }}>
                      <h3>{t("Footer.Shop")}</h3>
                      <h4>
                        <span class="nav-arrow fa fa-angle-right"> </span> Besana Beauty
                      </h4>
                      <h4>
                        <span class="nav-arrow fa fa-angle-right"> </span> Besana Health
                      </h4>
                    </Grid>
                    <Grid item sx={3} lg={3} style={{ paddingLeft: "15px" }}>
                      <h3>{t("Footer.Opportunity")}</h3>
                      <div alignContent="left">
                      <h4>
                        <span class="nav-arrow fa fa-angle-right"> </span> {t("Footer.PaymentsOpportunity")}
                      </h4>
                      </div>
                    </Grid>
                    <Grid item sx={3} lg={3} style={{ paddingLeft: "15px" }}>
                      <h3>{t("Footer.Contact")}</h3>
                      <h4>
                        {" "}
                        <MdLocationOn size="1em" />
                        2449 N TENAYA WAY, LAS VEGAS NV 89128, USA.
                      </h4>
                      <h4>
                        <MdPhoneEnabled size="1em" /> {"+1 (800) 477-8358"}{" "}
                      </h4>
                      <h4>
                        <FaEnvelope size="1em" />
                        <span> </span>info@besanaglobal.com
                      </h4>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div>
            <p>
              &copy; {t("Footer.Rights")}{" "}
              <a href="https://besanaglobal.com/" rel="nofollow">
                Besana Global
              </a>{" "}
              2022
            </p>
          </div>
        </div>
      </div>
    );
}
