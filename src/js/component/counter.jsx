import React from "react";


//crear un componente que se repita 6 veces
//crear un componente que sea un poco mas ancho
//crear funcionalidad contador del 1-9
//que el contador se reinicie cuando recargue pagina
//que al llegar a 9 el componente de la izquieeda inicie en 1


const Counter = (props) => {
    
    return (
        <div className="bigCounter">
            <div className="calendar">
              <i class="bi bi-clock"></i>
            </div>
            <div className="four card text-bg-dark mb-3" style="max-width: 18rem;">{props.digitFour}</div>
            <div className="three card text-bg-dark mb-3" style="max-width: 18rem;">{props.digitThree}</div>
            <div className="two card text-bg-dark mb-3" style="max-width: 18rem;">{props.digitTwo}</div>
            <div className="one card text-bg-dark mb-3" style="max-width: 18rem;">{props.digitOne}</div>
        </div>
    );
};

let counterSeconds = 0;
setInterval(function(){
    const four = counterSeconds.toFixed(4)/1000
    const three = counterSeconds.toFixed(3)/100
    const two = counterSeconds.toFixed(2)/10
    const one = counterSeconds.toFixed(1)
    counterSeconds++

},1000
)

            
 
export default Counter;