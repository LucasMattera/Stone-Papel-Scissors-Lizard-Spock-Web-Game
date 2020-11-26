import Navbar from "./Navbar";
import "../css/Juego.css";
import {Link} from "react-router-dom";
import ReglasJuego from '../imagenes/reglas pptls.png';

function Juego(){
	return(
		<div className="Juego">
			<Navbar/>
			<div className="juego-container">
				<div className="reglas">
					<img 
						src={ReglasJuego} 
						width="440" 
						height="352" 
					/>
				</div>

				<div className="menu-principal container">

					<div className="row">
						<div>
							<p className="titulo-juego">Piedra, Papel, Tijera, Lagarto, Spock</p>
						</div>
					</div>

					<div className="row">
						<div className="un-jugador">
							<Link 
								className="btn-small black" 
								to="/jugador1">
									1 Jugador
							</Link>
						</div>

						<div className="dos-jugadores">
							<Link classNa
								me="btn-small black" 
								to="/jugador2">
									2 Jugadores
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Juego;