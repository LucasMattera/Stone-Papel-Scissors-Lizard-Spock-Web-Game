import React, { useState } from 'react';
import Lagarto from "../imagenes/lagarto.svg";
import Papel from "../imagenes/papel.svg";
import Piedra from "../imagenes/piedra.svg";
import Spock from "../imagenes/spock.svg";
import Tijera from "../imagenes/tijera.svg";
import "../css/Jugador1.css";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

function Jugador1 (){

    //Hooks Jugador
    const [seleccionJugador, setSeleccionJugador] = useState();  
    const [puntajeJugador, setPuntajeJugador] = useState(0);

    //Hooks Computadora
    const [seleccionComputadora, setSeleccionComputadora] = useState();
    const [puntajeComputadora, setPuntajeComputadora] = useState(0);

    const [resultado, setResultado] = useState();

    const eleccionesPosiblesDeComputadora = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];

    let randomNumber = Math.floor(Math.random() * eleccionesPosiblesDeComputadora.length); 

    let eleccionComputadora = eleccionesPosiblesDeComputadora[randomNumber];

    function condicionalYRetornoGanador(eleccionJugador, 
                                        comparativa1, 
                                        eleccionComputadora,
                                        comparativa2A,
                                        comparativa2B) {
        
        if( (eleccionJugador === comparativa1) && 
            ((eleccionComputadora === comparativa2A) || (eleccionComputadora === comparativa2B))) {
            
            setPuntajeJugador(puntajeJugador + 1);
            setResultado("Ganaste");
        }
    }
    
    function condicionalYRetornoPerdedor(eleccionJugador, 
                                        comparativa1, 
                                        eleccionComputadora,
                                        comparativa2A,
                                        comparativa2B) {

        if( (eleccionJugador === comparativa1) && 
            ((eleccionComputadora === comparativa2A) || (eleccionComputadora === comparativa2B))) {
           
            setPuntajeComputadora(puntajeComputadora + 1);
            setResultado("Perdiste");
        }
    }


    function evaluarPartida(eleccionJugador, eleccionComputadora){
       //Piedra
        condicionalYRetornoGanador(eleccionJugador, 
                                    "Piedra", 
                                    eleccionComputadora,
                                    "Tijera",
                                    "Lagarto")

        if(eleccionJugador === eleccionComputadora){
            setResultado("Empate");
        }

        condicionalYRetornoPerdedor(eleccionJugador, 
                                    "Piedra", 
                                    eleccionComputadora,
                                    "Papel",
                                    "Spock")

        //Papel
        condicionalYRetornoGanador(eleccionJugador, 
                                    "Papel", 
                                    eleccionComputadora,
                                    "Piedra",
                                    "Spock")

        condicionalYRetornoPerdedor(eleccionJugador, 
                                    "Papel", 
                                    eleccionComputadora,
                                    "Tijera",
                                    "Lagarto")

        //Tijera
        condicionalYRetornoGanador(eleccionJugador, 
                                    "Tijera", 
                                    eleccionComputadora,
                                    "Papel",
                                    "Lagarto")

        condicionalYRetornoPerdedor(eleccionJugador, 
                                    "Tijera", 
                                    eleccionComputadora,
                                    "Piedra",
                                    "Spock")

        //Lagarto
        condicionalYRetornoGanador(eleccionJugador, 
                                    "Lagarto", 
                                    eleccionComputadora,
                                    "Papel",
                                    "Spock")

        condicionalYRetornoPerdedor(eleccionJugador, 
                                    "Lagarto", 
                                    eleccionComputadora,
                                    "Tijera",
                                    "Piedra")

        //Spock
        condicionalYRetornoGanador(eleccionJugador, 
                                    "Spock", 
                                    eleccionComputadora,
                                    "Tijera",
                                    "Piedra")

        condicionalYRetornoPerdedor(eleccionJugador, 
                                    "Spock", 
                                    eleccionComputadora,
                                    "Lagarto",
                                    "Papel")
    }

    function Jugar(eleccionJugador){
        setSeleccionJugador(eleccionJugador);
        setSeleccionComputadora(eleccionComputadora);
        evaluarPartida(eleccionJugador,eleccionComputadora);
    }

    return (
        <div className="divClass ">
            <Navbar/>
                <div className="container">
                    <div className="row">
                        <div className="puntos-jugadores">  
                            <div>
                                Pts Jugador: {puntajeJugador}
                            </div>
                            <div>
                                Pts Cpu: {puntajeComputadora}
                            </div>
                        </div>
                    </div>

                    
                    <div className="container-block">
                        <div className="contenedor-botones">
                            <button 
                                className="boton-img1 teal accent-2" 
                                onClick={() => {Jugar("Piedra")}}>
                                    <img 
                                        src={Piedra} 
                                        className="botones1" 
                                        width="100" 
                                        height="100"
                                    /> 
                            </button>
                            <button 
                                className="boton-img2 lime lighten-1" 
                                onClick={() => {Jugar("Papel")}}>
                                    <img 
                                        src={Papel} 
                                        className="botones2" 
                                        width="100" 
                                        height="100"
                                    /> 
                            </button>
                            <button 
                                className="boton-img3 white" 
                                onClick={() => {Jugar("Tijera")}}>
                                    <img 
                                        src={Tijera} 
                                        className="botones3" 
                                        width="100" 
                                        height="100"
                                    /> 
                            </button>
                            <button 
                                className="boton-img4 blue darken-1" 
                                onClick={() => {Jugar("Lagarto")}}>
                                    <img 
                                        src={Lagarto} 
                                        className="botones4" 
                                        width="100" 
                                        height="100"
                                    /> 
                            </button>
                            <button 
                                className="boton-img5 red" 
                                onClick={() => {Jugar("Spock")}}>
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
                            <div className="elecciones-jugadores">
                                <div sm={2}>
                                    Elegiste: {seleccionJugador}
                                </div>
                                <div sm={3}>
                                    Cpu eligio: {seleccionComputadora}
                                </div>
                            </div>
                    </div>

                    <div className="container-block"> 
                        <div className="resultado">
                            {resultado}
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

export default Jugador1;
