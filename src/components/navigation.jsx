import * as React from 'react';
import { useEffect, useState, useCallback } from 'react'
import Grid from '@mui/material/Grid'
import Select from './1.molecules/Select';
import Col from '../assets/svg/Colombia.svg';
import Usa from '../assets/svg/Usa.svg';
import Guatemala from '../assets/svg/Guatemala.svg';
import Mexico from '../assets/svg/Mexico.svg'
import Panama from '../assets/svg/Panama.svg'
import BurguerMenu from '../assets/svg/BurguerMenu.svg';
import { useTranslation } from 'react-i18next';
import ReactTooltip from 'react-tooltip';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import {
  clearCart,
} from "../actions/shoppingAction";
import "../styles/navigation_op.css"


const optionsList = [
  { value: 'en', description: 'USA', img: Usa, currency: 'USD' },
  { value: 'es', description: 'USA (es)', img: Usa, currency: 'USD' },
  { value: 'es', description: 'Guatemala', img: Guatemala, currency: 'GTQ' },
  { value: 'es', description: 'Colombia', img: Col, currency: 'COP' },
  { value: 'es', description: 'México', img: Mexico, currency: 'MXN' },
  { value: 'es', description: 'Panama', img: Panama, currency: 'USD' },
]

export const Navigation = (props) => {
  const isSmallDevice = window.innerWidth < 650;
  const [menuSmallDeviceVisible, setMenuSmallDeviceVisible] = useState(false);
  const { t, i18n } = useTranslation();
  const state = useSelector((state) => state);
  const { shopping: { cart }, user: { sponsor } } = state;
  const [language, setLanguage] = useState(() => {
    const languageKey = window.localStorage.getItem('country') ?? 'USA'
    return languageKey
  })
  const dispatch = useDispatch();
  const handleSelection = (optionSelected) => {
    window.localStorage.setItem('country', optionSelected.description)
    window.localStorage.setItem("language", optionSelected.value)
    window.localStorage.setItem('currency', optionSelected.currency)
    i18n.changeLanguage(optionSelected.value)
    dispatch(clearCart());
    window.location.reload();
  }


  return (
    <nav
      id="menu"
      className="navbar navbar-default navbar-fixed-top"
    >
      <div className="container" className="fisrt-div-nav-bar">
        <Grid
          container
          xs={12}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Grid
            item
            xs={1}
            style={{
              alignContent: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Grid>
          <Grid item xs={1} style={{ marginRight: isSmallDevice ? 55 : 28 }}>
            <Select
              label={language}
              optionsList={optionsList}
              onSelect={handleSelection}
            ></Select>
          </Grid>
        </Grid>
        <div
          className="container"
          className="second-div-nav-bar"
          style={{ display: isSmallDevice && "flex" }}
        >
          {window.innerWidth < 600 && (
            <>
              <img
                src="img/LOGO BESANA.png"
                style={{
                  width: 110,
                  height: 90,
                  paddingBottom: 15,
                  marginLeft: 20,
                }}
              />
              <Button style={{ width: 40, height: "auto", marginLeft: 155 }} onClick={() => { setMenuSmallDeviceVisible(!menuSmallDeviceVisible) }} >
                <img style={{ width: 40, height: "auto" }} src={BurguerMenu} />
              </Button>
            </>
          )}
          <Grid
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            {window.innerWidth > 600 && (
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  paddingLeft: 40,
                  paddingBottom: 12,
                }}
              >
                <img src="img/LOGO BESANA.png" style={{ width: 110, height: 90 }} />
              </div>
            )}
            <ul
              className="nav navbar-nav navbar-right"
              style={{
                textAlign: "end",
                color: "#fff !important",
                paddingRight: 40,
                paddingTop: 28,
              }}
            >
              <li>
                <a href="/#" className="page-scroll">
                  {t("Navbar.Home")}
                </a>
              </li>
              <li class="dropdown">
                 <a href="/#besanaBeauty" className="page-scroll" style={{ textColor: "#fff !important" }}>
                  {t("Navbar.Products")}
                </a>
              </li>
              <li>
                <a href="/company" className="page-scroll">
                  {t("Navbar.Company")}
                </a>
              </li>
              <li>
                <a href="/oportunity" className="page-scroll">
                  {t("Navbar.Opportunity")}
                </a>
              </li>
              <li>
                <a
                  href="https://backoffice.besanaglobal.com/login"
                  className="page-scroll"
                >
                  {t("Navbar.MyAccount")}
                </a>
              </li>
              <li>
                <a
                  className="menu-link"
                  href={`https://backoffice.besanaglobal.com/sign-up?sponsor=${!!sponsor ? sponsor : null}`}
                >
                  {t("Navbar.JoinUs")}
                </a>
              </li>
              {
                <li>
                  <a href={`/shoppingCar?sponsor=${!!sponsor ? sponsor : null}`}>
                    <>
                      {" "}
                      {cart?.length > 0 && (
                        <div className="bubbler-car">{cart?.length}</div>
                      )}
                      <ShoppingCartIcon
                        sx={{ fontSize: 30, color: "#88b900" }}
                      ></ShoppingCartIcon>
                    </>
                  </a>
                </li>
              }
            </ul>
          </Grid>
        </div>
      </div>
      {menuSmallDeviceVisible &&
        <div className="container" style={{ height: 210, backgroundColor: 'black' }}>
          <ul
            className="nav navbar-nav navbar-right"
            style={{
              color: "#fff !important",
              justifyContent: 'center',
              paddingTop: 24,
              display: 'flex'
            }}
          >
            <li>
              <a href="/" className="page-scroll">
                {t("Navbar.Home")}
              </a>
            </li>
            <li>
              <a href="/company" className="page-scroll">
                {t("Navbar.Company")}
              </a>
            </li>

            <li class="dropdown">
              <a
                href="#portfolio"
                className="page-scroll"
                style={{ textColor: "#fff !important" }}
              >
                {t("Navbar.Products")}
              </a>
              <ul class="dropdown-content" style={{ textAlign: "left" }}>
                <li>
                  <a className="page-scroll" href="#besanaBeauty">
                    Besana Beauty
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#besanaHealth">
                    Besana Health
                  </a>
                </li>
              </ul>
            </li>
            {
              <li>
                <a href={`/shoppingCar?sponsor=${!!sponsor ? sponsor : null}`}>
                  <>
                    {cart?.length > 0 && (
                      <div className="bubbler-car">{cart?.length}</div>
                    )}
                    <ShoppingCartIcon
                      sx={{ fontSize: 30, color: "#fff" }}
                    ></ShoppingCartIcon>
                  </>
                </a>
              </li>
            }
          </ul>

          <ul
            className="nav navbar-nav navbar-right"
            style={{
              color: "#fff !important",
              justifyContent: 'center',
              paddingTop: 24,
              display: 'flex'
            }}
          >
            <li>
              <a href="/oportunity" className="page-scroll">
                {t("Navbar.Opportunity")}
              </a>
            </li>
            <li>
              <a
                className="menu-link-without-background"
                href="#"
                data-tip
                data-for="registerTip"
              >
                Besana Academy
              </a>
              {/* <ReactTooltip id="registerTip" place="bottom" effect="solid">
                  Próximamente...
                </ReactTooltip> */}
            </li>
            <li>
              <a
                href="https://backoffice.besanaglobal.com/login"
                className="page-scroll"
              >
                {t("Navbar.MyAccount")}
              </a>
            </li>
            <li>
              <a
                className="menu-link"
                href={`https://backoffice.besanaglobal.com/sign-up?sponsor=${!!sponsor ? sponsor : null}`}
              >
                {t("Navbar.JoinUs")}
              </a>
            </li>
          </ul>

        </div>
      }
    </nav>

    

  );


}
