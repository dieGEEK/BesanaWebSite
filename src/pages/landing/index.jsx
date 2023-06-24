
import React, { useState, useEffect, useMemo } from "react";
import { AxiosGet, getCurrencyApi } from "../../api/axios/index";
import { Navigation } from "../../components/navigation";
import { Carrousel } from "../../components/carousel";
import { Promotion } from "../../components/promotion";
import { Gallery } from "../../components/gallery";
import { Publicity } from "../../components/screenImage";
import { Footer } from "../../components/footer";
import { useDispatch } from "react-redux";
import {
    setProductList,
} from "../../actions/shoppingAction";
import { ProductDetails } from "../../components/productDetails";
import { useNavigate, useLocation } from "react-router-dom";
import { addSponsor } from "../../actions/userActions";



function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
}
const Landing = ({ data }) => {
    const isSmallDevice = window.innerWidth < 700;
    const [products, setProducts] = useState([]);
    const [gall,setGall]=useState(false);
    const dispatch = useDispatch();
    let query = useQuery();

    useEffect(() => {
        getProductList();
        // let sposorName = query.get("sponsor")
        // if (sposorName !== null || sposorName !== "") {
        //     dispatch(addSponsor(sposorName))
        // }
         
    }, [])

    const getProductList =  async () => {
        let currensySimbol = localStorage.getItem('currency') ?? 'USD'
         let result = await getCurrencyApi('https://api.exchangeratesapi.io/v1/latest?access_key=a41e1fc4c595db3466126cafb507f63f&base=USD&symbols=', currensySimbol)
        let response = await  AxiosGet('products');
        console.log(currensySimbol)
        setProducts(response)
        setGall(true);
        dispatch(setProductList(response))
       
    }
    return (<>
        <Navigation />

        <Carrousel data={isSmallDevice ? data.CarouselSmallDevices : data.Carousel} />
      
        <Gallery data={products}  healthProductsData={data.HealthProducts}/> 
        <Promotion data={products} />
        <Publicity data={data.Publicity} />
        <Footer data={data.Contact} />
    </>)
}

export default Landing