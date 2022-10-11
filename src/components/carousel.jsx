import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import "../styles/carrousel.css"


export const Carrousel = (props) => {
    return (
        <div style={{ marginTop: 140, align:'center', backgroundColor: "#ffffff", paddingBottom: 75, boxShadow: 0}}>
            <Carousel style={{ height: "100%", boxShadow: 0 }}
            
            navButtonsProps={{
                style: {
                    backgroundColor: 'black',
                    height: 40,
                    width: 40
                }
            }}
            indicatorIconButtonProps={{
                style: {
                    fontSize: "50px"      // 3
                }
            }}>
                {props.data?.map((d, i) => (
                    <Paper {...props} elevation={0}>
                        {}
                        <img width='100%' height='750' src={d.smallImage} 
                        
                        />
                    </Paper>
                ))}
            </Carousel>
            <div id="besanaBeauty" style={{ heigth: 5 }}></div>
        </div>
    )
}

