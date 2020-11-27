import React, { useState } from 'react';
import Lagarto from "../imagenes/lagarto.svg";
import Papel from "../imagenes/papel.svg";
import Piedra from "../imagenes/piedra.svg";
import Spock from "../imagenes/spock.svg";
import Tijera from "../imagenes/tijera.svg";
import "../css/JugadorVsPC.css";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

function JugadorVsJugador (){

    const [seleccionJugador1, setSeleccionJugador1] = useState();  
    const [puntajeJugador1, setPuntajeJugador1] = useState(0);

    const [seleccionJugador2, setSeleccionJugador2] = useState();
    const [puntajeJugador2, setPuntajeJugador2] = useState(0);
    
    const [resultado, setResultado] = useState();

    function condicionalYRetornoGanadorP1(eleccionJugadorGanador, 
                                        comparativa1, 
                                        eleccionJugadorPerdedor,
                                        comparativa2A,
                                        comparativa2B) {

        if( (eleccionJugadorGanador === comparativa1) && 
            ((eleccionJugadorPerdedor === comparativa2A) || (eleccionJugadorPerdedor === comparativa2B)) ){ 
                
            setPuntajeJugador1( puntajeJugador1 + 1 ) ; setResultado( "Gana Jugador 1" )         
        }
    }

    function condicionalYRetornoGanadorP2(eleccionJugadorGanador, 
                                        comparativa1, 
                                        eleccionJugadorPerdedor,
                                        comparativa2A,
                                        comparativa2B) {

        if( (eleccionJugadorGanador === comparativa1) && 
            ((eleccionJugadorPerdedor === comparativa2A) || (eleccionJugadorPerdedor === comparativa2B)) ){ 
                
                setPuntajeJugador2( puntajeJugador2 + 1 ) ; setResultado( "Gana Jugador 2" ) 
        }
    }


    function evaluarPartida2(eleccionJugador1, eleccionJugador2){
       //Piedra
        condicionalYRetornoGanadorP1(eleccionJugador1, 
                                    "Piedra", 
                                    eleccionJugador2,
                                    "Tijera",
                                    "Lagarto"
                                    )

        condicionalYRetornoGanadorP2(eleccionJugador2, 
                                    "Piedra", 
                                    eleccionJugador1,
                                    "Tijera",
                                    "Lagarto"
                                    )

        if(eleccionJugador1 === eleccionJugador2){
            setResultado("Empate"
            );
        }

        //Papel
        condicionalYRetornoGanadorP1(eleccionJugador1, 
                                    "Papel", 
                                    eleccionJugador2,
                                    "Piedra",
                                    "Spock"
                                    )

        condicionalYRetornoGanadorP2(eleccionJugador2, 
                                    "Papel", 
                                    eleccionJugador1,
                                    "Piedra",
                                    "Spock"
                                    )

        //Tijera
        condicionalYRetornoGanadorP1(eleccionJugador1, 
                                    "Tijera", 
                                    eleccionJugador2,
                                    "Papel",
                                    "Lagarto"
                                    )

        condicionalYRetornoGanadorP2(eleccionJugador2, 
                                    "Tijera", 
                                    eleccionJugador1,
                                    "Papel",
                                    "Lagarto"
                                    )

        //Lagarto
        condicionalYRetornoGanadorP1(eleccionJugador1, 
                                    "Lagarto", 
                                    eleccionJugador2,
                                    "Papel",
                                    "Spock"
                                    )

        condicionalYRetornoGanadorP2(eleccionJugador2, 
                                    "Lagarto", 
                                    eleccionJugador1,
                                    "Papel",
                                    "Spock"
                                    )

        //Spock
        condicionalYRetornoGanadorP1(eleccionJugador1, 
                                    "Spock", 
                                    eleccionJugador2,
                                    "Tijera",
                                    "Piedra"
                                    )

        condicionalYRetornoGanadorP2(eleccionJugador2, 
                                    "Spock", 
                                    eleccionJugador1,
                                    "Tijera",
                                    "Piedra"
                                    )
        
    }

    function mostrarElecciones(id) {
        document.getElementById(id).style.display = "block"
    }

    function esconderElecciones(id) { 
        document.getElementById(id).style.display = "none" 
    }

    return (
        <div className="divClass ">
            <Navbar/>
                <div className="container">
                    <div className="row">
                        <div className="puntos-jugadores">  
                            <div>
                                Pts Jugador 1: {puntajeJugador1}
                            </div>
                            <div>
                                Pts Jugador 2: {puntajeJugador2}
                            </div>
                        </div>
                    </div>


                    <div className="container-block">
                        <div className="contenedor-botones">
                            <button 
                                className="boton-img1 teal accent-2" 
                                onClick={() => {
                                    setSeleccionJugador1("Piedra")
                                    esconderElecciones("elecciones-jugadores")}
                                }>
                                <img 
                                    src={Piedra} 
                                    className="botones1" 
                                    width="100" 
                                    height="100"
                                /> 
                            </button>
                            <button 
                                className="boton-img2 lime lighten-1" 
                                onClick={() => {
                                    setSeleccionJugador1("Papel")
                                    esconderElecciones("elecciones-jugadores")}
                                }>
                                <img 
                                    src={Papel} 
                                    className="botones2" 
                                    width="100" 
                                    height="100"
                                /> 
                            </button>
                            <button 
                                className="boton-img3 white" 
                                onClick={() => {
                                    setSeleccionJugador1("Tijera")
                                    esconderElecciones("elecciones-jugadores")}
                                }>
                                <img 
                                    src={Tijera} 
                                    className="botones3" 
                                    width="100" 
                                    height="100"
                                /> 
                            </button>
                            <button 
                                className="boton-img4 blue darken-1" 
                                onClick={() => {
                                    setSeleccionJugador1("Lagarto")
                                    esconderElecciones("elecciones-jugadores")}
                                }>
                                <img 
                                    src={Lagarto} 
                                    className="botones4" 
                                    width="100" 
                                    height="100"
                                /> 
                            </button>
                            <button 
                                className="boton-img5 red" 
                                onClick={() => {
                                    setSeleccionJugador1("Spock")
                                    esconderElecciones("elecciones-jugadores")}
                                }>
                                <img 
                                    src={Spock} 
                                    className="botones5" 
                                    width="100" 
                                    height="100"
                                /> 
                            </button>
                        </div>
                    </div>

                
                    <div className="container-block">
                        <div className="contenedor-botones">
                            <button 
                                className="boton-img1 teal accent-2" 
                                onClick={() => {setSeleccionJugador2("Piedra")}}
                            >
                                <img 
                                    src={Piedra} 
                                    className="botones1" 
                                    width="100" 
                                    height="100"
                                /> 
                            </button>
                            <button 
                                className="boton-img2 lime lighten-1" 
                                onClick={() => {setSeleccionJugador2("Papel")}}
                            >
                                <img 
                                    src={Papel} 
                                    className="botones2" 
                                    width="100" 
                                    height="100"
                                /> 
                            </button>
                            <button 
                                className="boton-img3 white" 
                                onClick={() => {setSeleccionJugador2("Tijera")}}
                            >
                                <img 
                                    src={Tijera} 
                                    className="botones3" 
                                    width="100" 
                                    height="100"
                                /> 
                            </button>
                            <button 
                                className="boton-img4 blue darken-1" 
                                onClick={() => {setSeleccionJugador2("Lagarto")}}
                            >
                                <img 
                                    src={Lagarto} 
                                    className="botones4" 
                                    width="100" 
                                    height="100"
                                /> 
                            </button>
                            <button 
                                className="boton-img5 red" 
                                onClick={() => {setSeleccionJugador2("Spock")}}
                            >
                                <img 
                                    src={Spock} 
                                    className="botones5" 
                                    width="100" 
                                    height="100"
                                /> 
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="elecciones-jugadores" id="elecciones-jugadores">
                            <div sm={2}>
                                Jugador 1 Eligio: {seleccionJugador1}
                            </div>
                            <div sm={3}>
                                Jugador 2 Eligio: {seleccionJugador2}
                            </div>
                        </div>
                    </div>

                    <div className="container-block"> 
                        <div className="resultado">
                            {resultado}
                        </div>
                    </div>
                    
                    <div className="row">
                        <button 
                            className="boton-jugar red" 
                            onClick={() => {
                                evaluarPartida2(seleccionJugador1, seleccionJugador2)
                                mostrarElecciones("elecciones-jugadores")
                            }}
                            >Jugar
                        </button>
                        <div className= "regla-1v1">
                            <p>
                                Para la modalidad de 1v1 el Jugador 1 
                                debera ser el primero que elija
                            </p>
                        </div>
                    </div>

                    <div className="row">
                            <div className="main-menu">
                                <Link to="/">
                                    <button className="boton-home">Volver</button>
                                </Link>
                            </div>
                        </div>
                        
                </div>
        </div>
    )

}

export default JugadorVsJugador;