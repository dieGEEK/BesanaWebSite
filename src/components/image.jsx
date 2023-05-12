import * as React from 'react';
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/shoppingAction";
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useState } from 'react';
import { fontSize } from '@mui/system';
import toast, { Toaster } from 'react-hot-toast';
import { Footer } from "./footer";
import { Navigation } from "./navigation";


export const Image = ({
  id,
  image,
  name,
  price,
  full
}) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const isSmallDevice = window.innerWidth < 900;
  const handleClick = () => {
    dispatch(addToCart(id));
    toast.success(t("Gallery.AddSucces"));
  };

  return (
    <div className="producto">
        <div className="producto-img">
          <img src={image}
            style={{
              maxWidth: 210,
              maxHeight: 260,
              marginBottom: 0,
              marginTop: isSmallDevice ? 50 : 0,
            }}
          />
        </div>
        <div className="producto-detalle">
          <div className="producto-footer">
            <h1>{name}</h1>
            <p>$ {price}</p>
          </div>
          <div className="producto-botones">
            <div>
              <a href={`${id}`}>{t("Gallery.Details")}</a>
            </div>
            <button className="btn-carrito" onClick={handleClick}>{t("Gallery.AddCart")}</button>
            
          </div>
        </div>              
      </div>
  );
};