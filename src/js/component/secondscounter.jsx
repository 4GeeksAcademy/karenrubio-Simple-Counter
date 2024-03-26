import React from "react";


//crear un componente que se repita 6 veces
//crear un componente que sea un poco mas ancho
//crear funcionalidad contador del 1-9
//que el contador se reinicie cuando recargue pagina
//que al llegar a 9 el componente de la izquieeda inicie en 1


const Secondscounter = (props) => {
  const { seconds } = props; // Obtener el valor de segundos de props

  // Calcular diferentes formatos de tiempo
  const four = Math.floor(seconds / 1000)%10;
  const three = Math.floor(seconds / 100)%10;
  const two = Math.floor(seconds / 10) %10
  const one = seconds % 10;
  

  return (
    <div className="row row-cols-4 row-cols-md-5 g-1 m-3">
      <div className="col">
        <div className="card text-bg-dark " style={{ width: "14rem", height: "10rem" }}>
          <i className="bi bi-clock text-white text-center fs-1"></i>
        </div>
      </div>
      <div className="col">
        <div className="card text-bg-dark" style={{ width: "14rem", height: "10rem" }}>
          <h5 className="card-title text-center fs-1">{four}</h5>
        </div>
      </div>
      <div className="col">
        <div className="card text-bg-dark" style={{ width: "14rem", height: "10rem" }}>
          <h5 className="card-title text-center fs-1">{three}</h5>
        </div>
      </div>
      <div className="col">
        <div className="card text-bg-dark" style={{ width: "14rem", height: "10rem" }}>
          <h5 className="card-title text-center fs-1">{two}</h5>
        </div>
      </div>
      <div className="col">
        <div className="card text-bg-dark" style={{ width: "14rem", height: "10rem" }}>
          <h5 className="card-title text-center fs-1">{one}</h5>
        </div>
      </div>
    </div>
  );
};

export default Secondscounter;
