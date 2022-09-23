import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

export const Carrousel = (props) => {
    return (
        <div style={{ marginTop: 75, align:'center', backgroundColor: "#ffffff", paddingBottom: 75}}>
            <Carousel style={{ height: 600 }} navButtonsProps={{
                style: {
                    backgroundColor: 'black',
                    height: 70
                }
            }}
            indicatorIconButtonProps={{
                style: {
                    fontSize: "95px",       // 3
                }
            }}>
                {props.data?.map((d, i) => (
                    <Paper>
                        {/* <h2 align="center">{d.title}</h2> */}
                        <img width='100%' height='600px' src={d.smallImage} 
                        />
                    </Paper>
                ))}
            </Carousel>
            <div id="besanaBeauty" style={{ heigth: 5 }}></div>
        </div>
    )
}

