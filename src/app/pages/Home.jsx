import React, { useEffect, useState } from "react";
import DogCard from "../components/Card";
import { Dog } from "../utils/types";
import api from "../utils/api";
import { ToastContainer, toast } from "react-toastify";
import CustomSelect from "../components/CustomSelect";
import MatchCard from "../components/MatchCard";
import airbnbLogo from "../../assets/images/airbnb.webp";
import amazonLogo from "../../assets/images/amazon.webp";
import bluemoonLogo from "../../assets/images/BlueMoon.webp";
import starbucksLogo from "../../assets/images/starbucks.webp";
import laysLogo from "../../assets/images/Lays.webp";
import targetLogo from "../../assets/images/target.webp";
import Next from "../../assets/images/right.svg";
import Prev from "../../assets/images/left.svg";


import "../../index.scss";

const Home = ({ handleLogout, resetUser }) => {
	const PAGE_SIZE = 12;

	const [page, setPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const [dogs, setDogs] = useState([]);
	const [selectedDogs, setSelectedDogs] = useState([]);
	const [selectedBreeds, setSelectedBreeds] = useState([]);
	const [match, setMatch] = useState(undefined);
	const [sort, setSort] = useState("asc");
	const [displayMatch, setDisplayMatch] = useState(false);
	const [sortOrder, setSortOrder] = useState("A to Z");

	const toggleSort = () => {
		setSort((prevSort) => (prevSort === "asc" ? "desc" : "asc"));
		setSortOrder((prevSortOrder) =>
			prevSortOrder === "A to Z" ? "Z to A" : "A to Z"
		);
	};

	const getMatch = async () => {
		try {
			const dogSearchResult = await api.dogMatchReq(selectedDogs);
			setMatch(dogs.find((d) => d.id === dogSearchResult.match));
			toast.dark("Found a match!");
			setDisplayMatch(true);
		} catch (error) {
			toast.dark("Can't find a match");
		}
	};

	const resetMatch = () => {
		setMatch(undefined);
		setSelectedDogs([]);
		setDisplayMatch(false);
	};

	const searchDogs = async () => {
		const data = {
			from: page * PAGE_SIZE,
			size: PAGE_SIZE,
			sort: `breed:${sort}`,
			breeds: selectedBreeds,
		};

		try {
			const dogSearchResult = await api.searchDogsReq(data);
			setTotalPages(Math.round(dogSearchResult.total / PAGE_SIZE));
			const dogResult = await api.getDogsReq(dogSearchResult.resultIds);
			setDogs(dogResult);
		} catch (error) {
			toast.dark(error);
		}
	};

	useEffect(() => {
		api.expiredSessionHandler(() => {
			resetUser();
		});
	}, []);

	useEffect(() => {
		searchDogs();
	}, [page, selectedBreeds, sort]);

	return (
		<>
			<main>
				<section id="hero">
					<div className="container">
						<div className="nav__container">
							<nav>
								<ul>
									<li>
										<a
											href="https://github.com/henlowgg"
											target="_blank"
											rel="noopener noreferrer"
										>
											github
										</a>
									</li>

									<li>
										<a
											href="https://fetch.com/"
											target="_blank"
											rel="noopener noreferrer"
										>
											fetch.com
										</a>
									</li>
									<li>
										<a type="button" onClick={() => handleLogout()}>
											logout
										</a>
									</li>
								</ul>
							</nav>
						</div>
						<div className="hero__text">
							<div className="sub__header">
								<div className="circle"></div>
								<h4>fetch & rescue</h4>
							</div>
							<h1 className="hero__header">Welcome to Rescue.io</h1>
							<p className="hero__intro">
								Our MicrosoftGPT-5 dogg.io software helps connect good doggos
								with loving families. For each goodest boi or bestest girl
								brought home from a shelter, our Partners at{" "}
								<a
									href="https://fetch.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									fetch.com
								</a>{" "}
								are pledging to give over $150 in rewards from our sponsors of
								over 500 Brands!
							</p>
						</div>
						<div>
							<div>
								<div>
									<h3>
										Use the search bar below to select a specific breed, then
										favorite the doggos that pop up! After you finish selecting doggos, scroll down to the bottom of the page, and click the button to generate a match. Our dogg.io ai algorithm
										matches you with the best doggos according to your Google
										and Meta analytics, then selects one based on your data!
									</h3>
									<h6>
										Disclaimer: Fetch does not know about us buying your data,
										and you cannot opt out of data collection after making an
										account with us.
									</h6>
								</div>

								<CustomSelect setSelectedBreeds={setSelectedBreeds} />

								<button className="sortingButton" onClick={toggleSort}>
									{`Sort Breeds from: ${sortOrder}`}

									{sort === "asc" ? (
										<img img src={Next} alt="next"/>
									) : (
										<img img src={Prev} alt="prev"/>
									)}
								</button>

								<div>
									<div>
										<div></div>
									</div>
									<div />
									{/* conditional render of dog cards, and display match cards */}
									<section>
										{displayMatch === false &&
											dogs.map((dog) => (
												<DogCard
													key={dog.id}
													dog={dog}
													selected={selectedDogs}
													setSelectedDogs={setSelectedDogs}
												/>
											))}
									</section>

									{match && (
										<div className="matchCard">
											<MatchCard match={match} resetMatch={resetMatch} />
										</div>
									)}

									<section>
										{selectedDogs.length > 0 && (
											<div>
                        <div className="resetBtnDiv">
												<button
													className="resetBtn"
													title="Match"
													onClick={resetMatch}
												>
													<p>Reset and let's try to find another doggo?</p>
													
												</button>
                        </div>
                        <div className="matchBtnDiv">
												<button
													className="matchBtn"
													title="Match"
													onClick={getMatch}
												>
													<p>
														Click me to generate a match!
														<br></br>
														<br></br>
														Number of Selected Doggos: {selectedDogs.length}
													</p>
												</button>
                        </div>
											</div>
										)}
									</section>
									<section className="btnSort">
										<button
											onClick={() => setPage((page) => page - 1)}
											disabled={page === 0}
										>
											<img className="prevBtn" src={Prev} alt="previous page" />
										</button>
										<div>
											{(page + 1).toString()} / {totalPages.toString()}
										</div>
										<button
											onClick={() => setPage((page) => page + 1)}
											disabled={page + 1 === totalPages}
										>
											<img className="nextBtn" src={Next} alt="next page" />
										</button>
									</section>
								</div>
							</div>
						</div>
						<div className="carousel">
							<div className="left__carousel"></div>
							<div className="right__carousel"></div>
							<div className="carousel__inner">
								<div className="item">
									<img src={airbnbLogo} alt="AirBnB" />
								</div>
								<div className="item">
									<img src={amazonLogo} alt="Amazon" />
								</div>
								<div className="item">
									<img src={bluemoonLogo} alt="BlueMoon" />
								</div>
								<div className="item">
									<img src={starbucksLogo} alt="Starbucks" />
								</div>
								<div className="item">
									<img src={laysLogo} alt="Lays" />
								</div>
								<div className="item">
									<img src={targetLogo} alt="Target" />
								</div>
								<div className="item">
									<img src={airbnbLogo} alt="AirBnB" />
								</div>
								<div className="item">
									<img src={amazonLogo} alt="Amazon" />
								</div>
								<div className="item">
									<img src={bluemoonLogo} alt="BlueMoon" />
								</div>
								<div className="item">
									<img src={starbucksLogo} alt="Starbucks" />
								</div>
								<div className="item">
									<img src={laysLogo} alt="Lays" />
								</div>
								<div className="item">
									<img src={targetLogo} alt="Target" />
								</div>
							</div>
						</div>
					</div>
					<div className="bottom__div">
						<div className="left">
							<div className="curve"></div>
							<div className="cover"></div>
						</div>
						<div className="right">
							<div className="services">
								<h2>Sponsors</h2>
							</div>
						</div>
					</div>
				</section>
				
        
			</main>
		</>
	);
};

export default Home;
