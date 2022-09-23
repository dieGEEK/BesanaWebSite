import { Navigation } from "./navigation";

export const Oportunity = (props) => {
  return (
    <>
    <Navigation />
    <div id='oportunity' style={{ backgroundColor: "#ffffff", marginTop: 65 }} >
        <div align="center">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <div style={{ padding: 20 }} >
                <h2 className="typewriter-text-oportunity allegoryFont">6 FORMAS DE GENERAR INGRESOS</h2>
                <hr class="social-line"/>
                <h3 style={{ fontSize: 17 }}>En Besana Global reconocemos tu esfuerzo y por lo mismo te ofrecemos 6 formas de generar ingresos reales</h3>
              </div>
            </div>
          </div>
        </div>
            <img src="img/Oportunity/GetMoney.png" style={{ marginTop: -310 }}/>
            {/* <img src="https://besanaglobal.com/wp-content/uploads/2021/03/oportunity_Mesa-de-trabajo-1-1.png"  width="90%"/> */}
        </div>
    </div>
    </>
  )
}
