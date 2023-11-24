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
import Restart from "../../assets/images/restart.svg"
import doggo from "../../assets/favicon.png";
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

  const toggleSort = () => {
    setSort((prevSort) => (prevSort === "asc" ? "desc" : "asc"));
  };

  const getMatch = async () => {
    try {
      const dogSearchResult = await api.dogMatchReq(selectedDogs);
      setMatch(dogs.find((d) => d.id === dogSearchResult.match));
      toast.success("Found a match!");
    } catch (error) {
      toast.error("Error finding a match :(");
    }
  };

  const resetMatch = () => {
    setMatch(undefined);
    setSelectedDogs([]);
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
      toast.error(error);
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
              <h1 className="hero__header">one doggo at a time..</h1>
              <p className="hero__intro">
                Our MicrosoftGPT-5 dogg.io software helps connect good
                doggos with loving families. For each goodest boi or bestest
                girl brought home from a shelter, our Partners at{" "}
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
                  <h3>find doggos</h3>
                </div>
                <CustomSelect setSelectedBreeds={setSelectedBreeds} />
                      <button onClick={toggleSort}> Breed A-Z
                        {sort === "asc" ? (
                          <next size={24} color="#300d38" />
                        ) : (
                          <prev size={24} color="#300d38" />
                        )}
                      </button>
                <div>
                  <div>
                    <div>
                      
                    </div>
                  </div>
                <div />
              <section>
                  <dogCard>
                    {dogs.map((dog) => (
                      <DogCard
                        key={dog.id}
                        dog={dog}
                        selected={selectedDogs}
                        setSelectedDogs={setSelectedDogs}
                      />
                    ))}
                  </dogCard>
              </section>
                  <div>
                    <button
                      onClick={() => setPage((page) => page - 1)}
                      disabled={page === 0}
                    >
                      <img src={Prev} alt="previous page" />
                    </button>
                    <p>
                      {(page + 1).toString()} / {totalPages.toString()}
                    </p>
                    <button
                      onClick={() => setPage((page) => page + 1)}
                      disabled={page + 1 === totalPages}
                    >
                      <img src={Next} alt="next page" />
                    </button>
                  </div>
                  {selectedDogs.length > 0 && (
                    <div>
                      <button title="Match" onClick={resetMatch}>
                        <img src={Restart} size={24} alt="Reset Results" />
                      </button>
                      <button title="Match" onClick={getMatch}>
                        {/* doggo get bbutton, aka show me my doggos */}
                        <img classNameName="w-1" src={doggo} alt="Dog icon" />
                        <p>{selectedDogs.length}</p>
                      </button>
                    </div>
                  )}
                </div>
              </div>
              {match && (
                <div>
                  <MatchCard match={match} resetMatch={resetMatch} />
                </div>
              )}
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
        <section id="about">
          <div className="about__container relative top-neg-5rem w-width max-w-max-width grid grid-cols-12">
            <div className="about__text grid-col-span-5 pl-2">
              <h2>go adopt a doggo right now, seriously, or else...</h2>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
