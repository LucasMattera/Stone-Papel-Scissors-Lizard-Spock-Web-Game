import React, { useState } from 'react';
import Lagarto from "../imagenes/lagarto.svg";
import Papel from "../imagenes/papel.svg";
import Piedra from "../imagenes/piedra.svg";
import Spock from "../imagenes/spock.svg";
import Tijera from "../imagenes/tijera.svg";
import "../css/Jugador1.css";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

function Jugador2 (){

    //Hooks Jugador 1
    const [seleccionJugador1, setSeleccionJugador1] = useState();  
    const [puntajeJugador1, setPuntajeJugador1] = useState(0);

    //Hooks Jugador 2
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
            
            setPuntajeJugador1( puntajeJugador1 + 1 )
            setResultado("Gana Jugador 1");
        }
    }
    
    function condicionalYRetornoGanadorP2(eleccionJugadorGanador, 
                                        comparativa1, 
                                        eleccionJugadorPerdedor,
                                        comparativa2A,
                                        comparativa2B) {
        
        if( (eleccionJugadorGanador === comparativa1) &&
            ((eleccionJugadorPerdedor === comparativa2A) || (eleccionJugadorPerdedor === comparativa2B)) ){
            
            setPuntajeJugador2( puntajeJugador2 + 1 )
            setResultado("Gana Jugador 2");
        }
    }

    function evaluarPartida2(eleccionJugador1, eleccionJugador2){
       //Piedra
        condicionalYRetornoGanadorP1(eleccionJugador1, 
                                    "Piedra", 
                                    eleccionJugador2,
                                    "Tijera",
                                    "Lagarto")

        condicionalYRetornoGanadorP2(eleccionJugador2, 
                                    "Piedra", 
                                    eleccionJugador1,
                                    "Papel",
                                    "Spock")

        if(eleccionJugador1 === eleccionJugador2){
            setResultado("Empate");
        }

        //Papel
        condicionalYRetornoGanadorP1(eleccionJugador1, 
                                    "Papel", 
                                    eleccionJugador2,
                                    "Piedra",
                                    "Spock")

        condicionalYRetornoGanadorP2(eleccionJugador2, 
                                    "Papel", 
                                    eleccionJugador1,
                                    "Tijera",
                                    "Lagarto")

        //Tijera
        condicionalYRetornoGanadorP1(eleccionJugador1, 
                                    "Tijera", 
                                    eleccionJugador2,
                                    "Papel",
                                    "Lagarto")

        condicionalYRetornoGanadorP2(eleccionJugador2, 
                                    "Tijera", 
                                    eleccionJugador1,
                                    "Piedra",
                                    "Spock")

        //Lagarto
        condicionalYRetornoGanadorP1(eleccionJugador1, 
                                    "Lagarto", 
                                    eleccionJugador2,
                                    "Papel",
                                    "Spock")

        condicionalYRetornoGanadorP2(eleccionJugador2, 
                                    "Lagarto", 
                                    eleccionJugador1,
                                    "Tijera",
                                    "Piedra")

        //Spock
        condicionalYRetornoGanadorP1(eleccionJugador1, 
                                    "Spock", 
                                    eleccionJugador2,
                                    "Tijera",
                                    "Piedra")

        condicionalYRetornoGanadorP2(eleccionJugador2, 
                                    "Spock", 
                                    eleccionJugador1,
                                    "Lagarto",
                                    "Papel")
        
        
    }
    
    function jugarJugador1(eleccionJugador1){
        setSeleccionJugador1(eleccionJugador1)
    }

    function jugarJugador2(eleccionJugador2){
        setSeleccionJugador2(eleccionJugador2)
    }

    function JugarDeADos(eleccionJugador2){
        //jugarJugador1(eleccionJugador1);
        setSeleccionJugador2(eleccionJugador2);
        evaluarPartida2(seleccionJugador1, seleccionJugador2);
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
                                    onClick={() => {jugarJugador1("Piedra"); console.log(seleccionJugador1)}}>
                                    <img 
                                        src={Piedra} 
                                        className="botones1" 
                                        width="100" 
                                        height="100"
                                    /> 
                                </button>
                                <button 
                                    className="boton-img2 lime lighten-1" 
                                    onClick={() => {jugarJugador1("Papel"); console.log(seleccionJugador1)}}>
                                    <img 
                                        src={Papel} 
                                        className="botones2" 
                                        width="100" 
                                        height="100"
                                    /> 
                                </button>
                                <button 
                                    className="boton-img3 white" 
                                    onClick={() => {jugarJugador1("Tijera"); console.log(seleccionJugador1)}}>
                                    <img 
                                        src={Tijera} 
                                        className="botones3" 
                                        width="100" 
                                        height="100"
                                    /> 
                                </button>
                                <button 
                                    className="boton-img4 blue darken-1" 
                                    onClick={() => {jugarJugador1("Lagarto"); console.log(seleccionJugador1)}}>
                                    <img 
                                        src={Lagarto} 
                                        className="botones4" 
                                        width="100" 
                                        height="100"
                                    /> 
                                </button>
                                <button 
                                    className="boton-img5 red" 
                                    onClick={() => {jugarJugador1("Spock"); console.log(seleccionJugador1)}}>
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
                                    onClick={() => {jugarJugador2("Piedra")}}
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
                                    onClick={() => {jugarJugador2("Papel")}}
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
                                    onClick={() => {jugarJugador2("Tijera")}}
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
                                    onClick={() => {jugarJugador2("Lagarto")}}
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
                                    onClick={() => {jugarJugador2("Spock")}}
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
                            <div className="elecciones-jugadores">
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
                                className="boton-img5 red" 
                                onClick={() => {evaluarPartida2(seleccionJugador1, seleccionJugador2)}}
                                >Jugar
                            </button>
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

export default Jugador2;