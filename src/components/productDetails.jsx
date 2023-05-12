import { useTranslation } from 'react-i18next';
import "../styles/detail.css"
import { useDispatch } from "react-redux";
import { useState, useEffect  } from 'react';
import * as React from 'react';
import { Footer } from "./footer";
import { Navigation } from "./navigation";
import { addToCart } from "../actions/shoppingAction";
import toast, { Toaster } from 'react-hot-toast';
import useHook from '../pages/product/hook.js'
import { useParams } from "react-router-dom";
import axios from 'axios';


export const ProductDetails = (props, data) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(addToCart(id));
        toast.success(t("Gallery.AddSucces"));
    };
    let { id } = useParams();
    const { product } = useHook(id)
    const [productItem, setproductItem] = useState({});
    const [descriptionItem, setdescription] = useState("");
    useEffect(() => {
        const item = product.find(pr => pr.id == id);

        setdescription(item?.description);

        setproductItem(item);
    }, [product])

    function translateDescription(){
        // let len = desc.split("#").length;
        // let DescripcionIngles = new Array();
        // let cadena = desc.split('#');
        // const newDescription = cadena;
        // console.log(cadena);
        // for (var i = 0; i < len - 1; i++) {
        //   let data = {
        //     q: cadena[i],
        //     source: 'es',
        //     target: 'en'
        //   }
        //   const respuesta = await (axios.post('https://libretranslate.org/translate', data))
        //   DescripcionIngles[i] = respuesta.data.translatedText;
        // }
        
        // if (i18n.language == 'en') {
        //     return(DescripcionIngles);
        // }
        // else {
        //     return(newDescription);
        // }
      }
    return (
    <>
    <Navigation style={{ backgroundColor: "#ffffff" }}/>
    <div><Toaster/></div>
    <div className="details">        
        {}
        <div className="detail-img">
            <div></div>
            <img
                src={productItem?.img}              
            />
            <div></div>
        </div>
        <div className="detail-content">              
            <div className="content-name">
                <h>
                    {productItem?.name}   
                </h>
            </div>
            <div className='content-description'>
                <h>
                    {t("Details.Desc")} 
                </h>
                <details className='content-summary'>
                    <summary>+ {t("Details.Ingredients")}</summary>
                    <ul className='summary-list'>
                        <li>{t("Details.Ingredient1")}</li>
                        <li>{t("Details.Ingredient2")}</li>
                        <li>{t("Details.Ingredient3")}</li>
                    </ul>
                </details>
            </div>
            <div className='content-buy'>
                <div className="content-price">
                        <h>
                            $ {productItem?.parsedPrice}   
                        </h>
                    </div>
                <div className='content-button'>
                    <input type="button" onClick={handleClick} value={t('Details.Button')} />
                </div>
            </div>
        </div>
    </div>
    <Footer data={data.Contact} />
    </> 
    );
};
