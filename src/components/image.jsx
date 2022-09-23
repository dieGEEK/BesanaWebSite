import * as React from 'react';
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/shoppingAction";
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  overflow:'scroll',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: '100%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  display: "flex", 
  flexDirection: "column",
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px 20px'
};

export const Image = ({
  title,
  parsedPrice,
  points,
  idProduct,
  smallImage,
  description,
  isHealthProduct,
}) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [product, setProduct] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if (title.includes("Paquete") || title.includes("CBG5") || title.includes("Para el") || title.includes("B -MAX")) {
      setOpen(false);
    } else {
      const newDescription = description.split("#");
      setOpen(true);
      setProduct((product) => ({
        productTitle: title,
        productDescription: newDescription,
      }));
    }
  };
  const handleClose = () => setOpen(false);
  const handleClick = () => {
    dispatch(addToCart(idProduct));
  };
  return (
    <div
      className={
        title.includes("CBG5") || title.includes("B -MAX")
          ? "product-container-health"
          : "product-container"
      }
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            src={smallImage}
            className="img-product"
            alt={title}
            style={{
              maxWidth: 210,
              maxHeight: 260,
              marginTop: 0,
              marginBottom: 0,
              marginTop: 600,
            }}
          />{" "}
          <h3 id="modal-modal-title" variant="h6" component="h2">
            {product.productTitle ?? ""}
          </h3>
          {product.productDescription &&
            product.productDescription.map((pr) => (
              <>
                <p id="modal-modal-description" sx={{ mt: 2 }}>
                  {pr}
                </p>
                <br></br>
              </>
            ))}
        </Box>
      </Modal>
      <a title={title} data-lightbox-gallery="gallery1">
        <img src={smallImage} className="img-product" alt={title} />{" "}
      </a>{" "}
      <div
        className={
          title.includes("CBG5") || title.includes("B -MAX")
            ? "modal-product-health"
            : "modal-product"
        }
      >
        <h5
          class={
            title.includes("CBG5") || title.includes("B -MAX")
              ? "title-product-health"
              : "title-product"
          }
        >
          {title}
        </h5>
        <p
          class={
            title.includes("CBG5") || title.includes("B -MAX")
              ? "price-product-health"
              : "price-product"
          }
        >
          <span>{parsedPrice}</span>
        </p>
        {title.includes("Paquete") ||
          title.includes("CBG5") ||
          title.includes("Para el") ||
          title.includes("B -MAX") || (
            <button
              className={
                title.includes("CBG5")
                  ? "button-product-health"
                  : "button-product"
              }
              onClick={handleOpen}
            >
              {t("Gallery.Details")}
            </button>
          )}
        <strong
          className={
            title.includes("CBG5") || title.includes("B -MAX")
              ? "button-product-health"
              : "button-product"
          }
          style={{ fontSize: 21 }}
        >
          {" "}
          |{" "}
        </strong>
        <button
          onClick={() => handleClick()}
          className={
            title.includes("CBG5") || title.includes("B -MAX") ? "button-product-health" : "button-product"
          }
        >
          {t("Gallery.AddCart")}
        </button>
      </div>
    </div>
  );
};