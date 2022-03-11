import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setAuth, setUser, setToken, setProfile } from "../auth/authslice";
import AngryBirds from "../components/Games/AngryBirds/AngryBirds";
import MissionMars from "../components/Games/MissionMars/MissionMars";
import AvengersGame from "./Games/AvengersGame/AvengersGame";
import MonkeyMultiplier from "./Games/MonkeyMultiplier/MonkeyMultiplier";
import Login from "../components/LoginAndSignup/Login";
import Signup from "../components/LoginAndSignup/Signup";
import CodeEditor from "../components/CodeEditor/CodeEditor";
import FuncBoxx from "./FuncBoxx/FuncBoxx";
import BowlingGame from "../components/Games/BowlingGame/BowlingGame";
import FlappyGame from "../components/Games/FlappyGame/FlappyGame";
import ClockGame from "../components/Games/ClockGame/ClockGame";
import AlienGame from "../components/Games/AlienGame/AlienGame";
import CardGame from "../components/Games/CardGame/cardGame";
import TemperatureConversions from "../components/Games/TemperatureConversions/TemperatureConversions";
// import TemperatureConversions2 from "../components/Games/TemperatureConversions2/TemperatureConversions2";
import PollutoFree from "../components/Games/PollutoFree/PollutoFree";
import LandingPage from "./LandingPage/LandingPage";
import AboutPage from "./AboutPage/AboutPage";
import SalesPage from "./SalesPage/SalesPage";
import MoleGame from "./Games/WhackAMole/WhackAMole";
import IncrediblesGame from "./Games/IncrediblesGame/IncrediblesGame";
import TeamsPage from "./TeamsPage/TeamsPage";
import ColorFun from "./Games/ColorFun/ColorFun";
import MySolarSystem from "./Games/MySolarSystem/MySolarSystem";
import LetsMakeItRain from "./Games/LetsMakeItRain/LetsMakeItRain";
import MotuPatlu from "./Games/MotuPatlu/MotuPatlu";
import StatesThatMatter from "./Games/StatesThatMatter/StatesThatMatter";
import WelcomePage from "./WelcomePage/WelcomePage";
import Calculator from "./Games/Calculator/Calculator";
import UserNavbar from "./UserNavbar/UserNavbar";
import EditProfile from "./Profile/EditProfile";
import ForgotPass from "./ForgotPass/Forgot";
import Preview from "./Preview/Preview";
import HitIt from "./Games/HitIt/HitIt";
import TrashGame from "./Games/TrashGame/TrashGame";
import CashierGame from "./Games/CashierGame/CashierGame";
import PhotosynthesisGame from "./Games/PhotosynthesisGame/PhotosynthesisGame";
import RecycleIt from "./Games/RecycleIt/RecycleIt";
import useAuth from "../hooks/useAuth";
import FlippableCard from "./FlippableCard/FlippableCard";
import Container from "./FlippableCard/Container";
import Butterfly from "./Games/LifeCycleOfButterfly/LifeCycleOfButterFly";
import Example from "./VideoEmbed/Example";
import ServerTest from "./ServerTest";
import Zombie from "./Games/ZombieGame/ZombieGame";
import AnimalHomeGame from "./Games/AnimalHomeGame/AnimalHomeGame";
import Decimal from "./Games/DecimalGame/DecimalGame";
import SubscriptionPage from "./Subscriptions/SubscriptionPage";
import StepMeasure from "./Games/StepMeasureGame/StepMeasure";
import Calculator2Game from "./Games/Calculator2/Calculator2";
import AreaGame from "./Games/AreaGame/AreaGame";
import Mrfraction from "./Games/MrFraction/MrFraction";
import Demo from "./Games/DemoEditor/DemoEditor";
import WeightUnitConversions from "./Games/WeightUnitConversions/WeightUnitConversions";
import PawnShop from "./Games/PawnShop/PawnShop";
import CountDracula from "./Games/CountDracula/CountDracula";
import ChemistryLab from "./Games/ChemistryLab/ChemistryLab";
import WeatherGame from "./Games/WeatherGame/WeatherGame";
import SeizeHerGame from "./Games/SeizeHerGame/SeizeHerGame";
import CatchMeIfUCanGame from "./Games/CatchMeIfUCanGame/CatchMeIfUCanGame";
import CheesyGuptaGame from "./Games/CheesyGuptaGame/CheesyGuptaGame";
import FeedTheCrocsGame from "./Games/FeedTheCrocsGame/FeedTheCrocsGame";
import LUnitConvGame from "./Games/LUnitConvGame/LUnitConvGame";
import PercentCalcGame from "./Games/PercentCalcGame/PercentCalcGame";
import DeciChemistGame from "./Games/DeciChemistGame/DeciChemistGame";
import ShootThePrimesGame from "./Games/ShootThePrimesGame/ShootThePrimesGame";
import RecognisePatternGame from "./Games/RecognisePatternGame/RecognisePatternGame";
import BasketballGame from "./Games/BasketballGame/BasketballGame";
import TemperatureConversions2 from "./Games/TemperatureConversions2/TemperatureConversions2";

function App() {
	const dispatch = useDispatch();
	const { token } = useAuth();
	const apiurl = process.env.REACT_APP_API_URL;
	toast.configure();
	useEffect(() => {
		const isAuth = async () => {
			try {
				const response = await fetch(
					`${
						process.env.NODE_ENV === "development"
							? apiurl
							: "https://server.funcbox.in"
					}/auth/verify`,
					{
						credentials: "include",

						method: "GET",
						headers: { token: token, data: "all" },
					}
				);

				const parseRes = await response.json();

				// console.log(parseRes);
				if (parseRes.isAuthorized === true) {
					// console.log("Authenticated from verify");
					dispatch(setAuth({ isAuthenticated: true }));
					dispatch(
						setUser({
							username:
								parseRes.userDetails[0].fname +
								" " +
								parseRes.userDetails[0].lname,
							userid: parseRes.userDetails[0].id,
						})
					);
					dispatch(setProfile({ avatar: parseRes.userDetails[0].avatar }));
					dispatch(setToken({ token: "Bearer " + parseRes.token }));
				} else {
					dispatch(setAuth({ isAuthenticated: false }));
					dispatch(setToken({ token: " " }));
				}
			} catch (error) {
				console.error(error.message);
			}
		};

		isAuth();
	}, []);
	return (
		<Router>
			<div className="App">
				<ToastContainer
					position="top-left"
					pauseOnFocusLoss={false}
					pauseOnHover={false}
					autoClose={2000}
				/>
				<Switch>
					<Route exact path="/Angry_Birds_Climb" component={AngryBirds} />
					<Route exact path="/Mission_Mars" component={MissionMars} />
					<Route exact path="/Monkey_Multiplier" component={MonkeyMultiplier} />
					<Route exact path="/Step_Measure" component={StepMeasure} />
					<Route exact path="/Lets_Make_It_Rain" component={LetsMakeItRain} />
					<Route exact path="/Bowling_Game" component={BowlingGame} />
					<Route exact path="/Clock_Game" component={ClockGame} />
					<Route exact path="/Alien_Game" component={AlienGame} />
					<Route exact path="/Avengers_Assemble" component={AvengersGame} />
					<Route exact path="/Whack_A_Mole" component={MoleGame} />
					<Route
						exact
						path="/The_Incredible_Shot"
						component={IncrediblesGame}
					/>
					<Route exact path="/Colour_Fun" component={ColorFun} />
					<Route exact path="/My_Solar_System" component={MySolarSystem} />
					<Route exact path="/My_Own_Calculator" component={Calculator} />
					<Route exact path="/Flappy_Game" component={FlappyGame} />
					<Route exact path="/Cash_Out_Cashier" component={CashierGame} />
					<Route exact path="/Photosynthesis" component={PhotosynthesisGame} />
					<Route exact path="/Mr_Fraction" component={Mrfraction} />
					<Route
						exact
						path="/Temperature_Conversions"
						component={TemperatureConversions}
					/>
					<Route exact path="/Pawn_Shop" component={PawnShop} />
					<Route exact path="/Card_Game" component={CardGame} />
					<Route exact path="/Speedy_Calculator" component={MotuPatlu} />
					<Route
						exact
						path="/States_That_Matter"
						component={StatesThatMatter}
					/>
					<Route exact path="/Hit_It" component={HitIt} />
					<Route exact path="/Pollut_O_Free" component={PollutoFree} />
					<Route exact path="/The_Trash_Game" component={TrashGame} />
					<Route exact path="/Soil_Friendly" component={RecycleIt} />
					<Route exact path="/Butterfly_Game" component={Butterfly} />
					<Route exact path="/Lil_Jombee" component={Zombie} />
					<Route exact path="/Decimal_Game" component={Decimal} />
					<Route
						exact
						path="/Animals_And_Their_Homes"
						component={AnimalHomeGame}
					/>
					<Route exact path="/Calculator_Game" component={Calculator2Game} />
					<Route exact path="/Shapes_Area" component={AreaGame} />
					<Route exact path="/Demo" component={Demo} />
					<Route exact path="/Count_Dracula" component={CountDracula} />
					<Route exact path="/Chemistry_Lab" component={ChemistryLab} />
					<Route
						exact
						path="/Weight_Unit_Conversions"
						component={WeightUnitConversions}
					/>
					<Route exact path="/Weather_Weather" component={WeatherGame} />
					<Route exact path="/Feed_The_Crocs" component={FeedTheCrocsGame} />
					<Route exact path="/Basketball_Game" component={BasketballGame} />
					<Route exact path="/Temp_Conv" component={TemperatureConversions2} />
					<Route exact path="/Seize_Her" component={SeizeHerGame} />
					<Route
						exact
						path="/Catch_Me_If_U_Can"
						component={CatchMeIfUCanGame}
					/>
					<Route exact path="/Cheesy_Gupta" component={CheesyGuptaGame} />
					<Route exact path="/Feed_The_Crocs" component={FeedTheCrocsGame} />
					<Route
						exact
						path="/Liquid_Unit_Conversions"
						component={LUnitConvGame}
					/>
					<Route exact path="/Percent_Calculator" component={PercentCalcGame} />
					<Route exact path="/Shoot_The_Prime" component={ShootThePrimesGame} />
					<Route exact path="/Deci_Chemist" component={DeciChemistGame} />
					<Route
						exact
						path="/Recognise_Pattern"
						component={RecognisePatternGame}
					/>

					<Route exact path="/UserNavbar" component={UserNavbar} />
					<Route exact path="/Login" component={Login} />
					<Route exact path="/Signup" component={Signup} />
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/AboutPage" component={AboutPage} />
					<Route exact path="/Welcome" component={WelcomePage} />
					<Route exact path="/SalesPage" component={SalesPage} />
					<Route exact path="/CodeEditor" component={CodeEditor} />
					<Route exact path="/TeamsPage" component={TeamsPage} />
					<Route exact path="/EditProfile" component={EditProfile} />
					<Route exact path="/ForgotPass" component={ForgotPass} />
					<Route exact path="/subscriptions" component={SubscriptionPage} />
					{/* <Route exact path="/flippable" component={Container} /> */}
					<Route exact path="/VideoEmbed" component={Example} />
					<Route exact path="/test" component={ServerTest} />
					<Route exact path="/:code" component={Preview} />
				</Switch>
			</div>
		</Router>
	);
}
export default App;
