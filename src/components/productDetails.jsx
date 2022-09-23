import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';

export const ProductDetails = (props) => {
    const { t, i18n } = useTranslation();
    return (


        <Grid container style={{ background: 'white', font: `"proxima-nova",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"` }} id="Details">
            <Grid item xs={12} lg={8} id="productimage">
                <img
                    src="https://besanaglobal.com/wp-content/uploads/2021/01/producto-besanaglobal-cbg5hd-06_CBG5-1.png"
                    className="img-responsive" alt=""
                    style={{ height: '70%', display: 'block', margin: 'auto', marginTop: '100px' }}
                />
            </Grid>
            <Grid item xs={12} lg={4} style={{ background: '#E0E0E0' }} >

                <Grid item xs={12} lg={12} style={{ padding: 30 }}>

                    <Grid container >
                        <Grid item xs={6} lg={6} style={{ padding: 30 }}>
                            <h style={{ fontFafamily: 'Georgia, Cambria, Times', fontSize: '40', color: 'black' }}>
                                CBG5
                            </h>
                        </Grid>
                        <Grid item xs={6} lg={6} style={{ padding: 30 }}>
                            <h style={{ fontFafamily: 'Proxima Nova Bold,Helvetica,Arial,sans-serif', fontSize: '40', color: 'darkgreen' }}>
                                $100,00
                            </h>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={12} style={{ padding: 30 }}>
                    <h style={{ fontSize: '18', color: 'black' }}>
                        {t('Details.Desc')}
                    </h>
                    <h1 style={{ fontSize: '20', color: 'darkgreen' }}>{t('Details.Benefits')}</h1>
                    <h style={{ font: `'Raleway'`, fontSize: '15', color: 'black' }}>
                        {t('Details.Benefit1')}<br />
                        {t('Details.Benefit2')}<br />
                        {t('Details.Benefit3')}<br />
                        {t('Details.Benefit4')}<br />
                    </h>
                </Grid>
                <Grid item xs={12} lg={12} style={{ padding: 30 }}>
                    <input type="text" class="text" value="$100,00" />
                    <input type="button" class="button" value={t('Details.Button')} />
                </Grid>
                <Grid item xs={12} lg={12} style={{ padding: 30 }}>
                    <h style={{ fontFafamily: 'Georgia, Cambria, Times', fontSize: '20', color: 'darkgreen' }}>
                        {t('Details.Category')} :
                    </h><h> Besana Health</h>
                </Grid>
            </Grid>
        </Grid>

    );
};
