import React, { useEffect, useState } from "react";
import DogCard from "../components/Card";
import { Dog, Dogs, DogsSearchFilter } from "../utils/types";
import api from "../utils/api";
import { toast } from "react-toastify";
import CustomSelect from "../components/CustomSelect";
import MatchCard from "../components/MatchCard";
import airbnbLogo from "../../assets/images/airbnb.webp";
import amazonLogo from "../../assets/images/amazon.webp";
import bluemoonLogo from "../../assets/images/BlueMoon.webp";
import starbucksLogo from "../../assets/images/starbucks.webp";
import laysLogo from "../../assets/images/Lays.webp";
import targetLogo from "../../assets/images/target.webp";
import { Button } from "@material-tailwind/react";

const Home = ({ handleLogout, resetUser }) => {
  const PAGE_SIZE = 12;

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [dogs, setDogs] = useState([]);
  const [selectedDogs, setSelectedDogs] = useState([]);
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [match, setMatch] = useState(undefined);
  const [sort, setSort] = useState("asc");
  //I DID SOMETHING
  const [dogSearched, setDogSearched] = useState("false");

  const toggleSort = () => {
    setSort((prevSort) => (prevSort === "asc" ? "desc" : "asc"));
  };

  const getMatch = async () => {
    try {
      const dogSearchResult = await api.dogMatchReq(selectedDogs);
      setMatch(dogs.find((d) => d.id === dogSearchResult.match));
      toast.success("Found doggos in your area!");
      //I DID SOMETHING
      setDogSearched("true");
    } catch (error) {
      toast.error("No doggos in your area");
    }
  };

  const resetMatch = () => {
    setMatch(undefined);
    setSelectedDogs([]);
    //I DID SOMETHING
    setDogSearched("false");
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
  }, [resetUser]);

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
                    <a href="">About</a>
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
                      Logout
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hero__text">
              <div className="sub__header">
                <div className="circle"></div>
                <h4>Fetch & Rescue Doggos</h4>
              </div>
              <h1 className="hero__header">
                We help people find and save dogs from shelters
              </h1>
              <p className="hero__intro">
                Our pledge is to bring x doggos into family homes by the end of
                2024. For each doggo brought home from a shelter, our Partners
                at{" "}
                <a
                  href="https://fetch.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  fetch.com
                </a>{" "}
                will give $50 in rewards from our sponsors of over 500 Brands!
              </p>
            </div>
            <div className="image__container">
              <div>
                <div>
                  <h2>rescue search</h2>
                </div>

                <div>
                  <div>
                    <div>
                      <CustomSelect setSelectedBreeds={setSelectedBreeds} />
                      <button className="" onClick={toggleSort}>
                        {sort === "asc" ? (
                          <Button size={24} color="#300d38" />
                        ) : (
                          <Button size={24} color="#300d38" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div />
                  {dogSearched === "false" && (
                    <div className="sm:text-left w-16 md:w-32 lg:w-48 results__container">
                      {dogs.map((dog) => (
                        <DogCard
                          key={dog.id}
                          dog={dog}
                          selected={selectedDogs}
                          setSelectedDogs={setSelectedDogs}
                        />
                      ))}
                    </div>
                  )}

                  <div>
                    <button
                      onClick={() => setPage((page) => page - 1)}
                      disabled={page === 0}
                    >
                      Prev
                      {/* <image src={pagePrev} alt="previous page" /> */}
                    </button>
                    <p>
                      {(page + 1).toString()} / {totalPages.toString()}
                    </p>
                    <button
                      onClick={() => setPage((page) => page + 1)}
                      disabled={page + 1 === totalPages}
                    >
                      Next
                      {/* <image src={pageNext} alt="next page" /> */}
                    </button>
                  </div>
                  {selectedDogs.length > 0 && (
                    <div>
                      <button title="Match" onClick={resetMatch}>
                        {" "}
                        Reset
                        {/* <IconTrash size={24} /> */}
                      </button>
                      <button title="Match" onClick={getMatch}>
                        {" "}
                        Match
                        {/* <image classNameName="w-8" src={dogIcon} alt="Dog icon" /> */}
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
                <h5>Sponsors</h5>
              </div>
            </div>
          </div>
        </section>
        <section id="about">
          <div className="about__container">
            <div className="about__text">
              <h2>bring home a doggo, I swear you'll be happy</h2>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
