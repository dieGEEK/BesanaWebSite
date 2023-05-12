
import { Image } from "./image";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import getSymbolFromCurrency from 'currency-symbol-map';
import "../styles/gallery.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import toast, { Toaster } from 'react-hot-toast';

export const Gallery = (props) => {

  const [beautyList, setBeautyList] = useState([])
  const [healthList, setHealthList] = useState([])
  const isSmallDevice = window.innerWidth < 900;
  const { t, i18n } = useTranslation();      


  useEffect(() => {
    if (props.data) {
      props.data.map((product) => {
        if (product.line == 'beauty' & product.available) {
          setBeautyList(oldArray => [...oldArray, product])
        } else if (product.line == 'health' & product.available) {
          setHealthList(oldArray => [...oldArray, product])
        }
      })
    }    
    console.log(props.data)
  }, [props.data])

  const mapCurrentFormat = ((ammont) => {
    let currencyFomrat = localStorage.getItem('currency') ?? 'USD'
    return getSymbolFromCurrency(currencyFomrat) + ammont
  })


  return (
    <>
    <div style={{ backgroundColor: "#ffffff", paddingBottom: 40 }}>
      <div><Toaster/></div>
      <div className="text-center">
        <div className="container">
          <div className="section-title">
            <p className="menu-link-without-background-beauty" style={{ margin: isSmallDevice ? "35px" : "35px 350px" }}>
              Besana Beauty
            </p>
            <div className="row">
              <a>{t("Gallery.SubTitleBeauty")}</a><a style={{ fontWeight: 'bold' }}>BESANA BEAUTY.</a>
            </div>
          </div>

          <div className="productos">
            {console.log(beautyList)}
            {
              beautyList.map(item => (
                <Image
                  key={item.id}
                  id = {item.id}
                  image = {item.img}
                  name = {item.name}
                  price = {item.parsedPrice}
                  descripcion = {item.description}
                  full = {item}
                />
              ))
            }
          </div>

          <div className="section-title">
            <p className="menu-link-without-background-beauty" style={{ margin: isSmallDevice ? "35px" : "35px 350px" }}>
              Besana Health
            </p>
            <p>{t("Gallery.SubTitleHealth")}</p>
          </div>

          <div className="productos">
            {console.log(beautyList)}
            {
              healthList.map(item => (
                <Image
                  key={item.id}
                  id = {item.id}
                  image = {item.img}
                  name = {item.name}
                  price = {item.parsedPrice}
                  descripcion = {item.description}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
