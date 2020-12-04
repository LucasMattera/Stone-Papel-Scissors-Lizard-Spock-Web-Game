import Navbar from "./Navbar";
import "../css/Home.css";
import {Link} from "react-router-dom";
import ReglasJuego from '../imagenes/reglas pptls.png';

function Home(){
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
						<div className="un-jugador">
							<Link 
								className="btn-small black" 
								to="/1vsPC">
										Un Jugador
							</Link>
						</div>

						<div className="dos-jugadores">
							<Link classNa
								me="btn-small black" 
								to="/1v1">
									Dos Jugadores
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;