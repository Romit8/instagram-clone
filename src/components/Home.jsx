import React, { useState } from "react";
import "./home.css";
import card1 from "../assests/images/cardimg1.avif";
import card2 from "../assests/images/cardimg2.jpg";
import card3 from "../assests/images/cardimg3.jpg";
import card4 from "../assests/images/cardimg4.avif";
import card5 from "../assests/images/cardimg5.avif";
import card6 from "../assests/images/cardimg6.avif";
import card7 from "../assests/images/cardimg7.avif";
import card8 from "../assests/images/cardimh8.avif";
import profile from "../assests/images/profileimg.avif";
import profile2 from "../assests/images/profileimg2.avif";
import profile3 from "../assests/images/profileimg3.avif";
import profile4 from "../assests/images/cardimg4.avif";
import profile5 from "../assests/images/profileimg5.avif";
import profile6 from "../assests/images/cardimg6.avif";
import profile7 from "../assests/images/cardimg7.avif";
import profile8 from "../assests/images/profileimg8.avif";

import { GoHomeFill } from "react-icons/go";
import { AiFillHeart } from "react-icons/ai";
import { HiDocumentDownload, HiOutlineLogout } from "react-icons/hi";
import { RiVideoAddFill } from "react-icons/ri";

// LikeButton component
const LikeButton = () => {
  const [likeCount, setLikeCount] = useState(0);

  const likePost = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <button className="likeBtn" onClick={likePost}>
      <span role="img" aria-label="like">
        ❤️
      </span>
      <span>{likeCount}</span>
    </button>
  );
};

const Home = () => {
  // Sample card data
  const cardsData = [
    {
      id: 1,
      profileImg: profile,
      username: "Astronaut",
      follow:"follow",
      cardImg: card1,
    },
    {
      id: 2,
      profileImg: profile2,
      username: "Romit Patidar",
      follow:"follow",
      cardImg: card2,
    },
    {
      id: 4,
      profileImg: profile4,
      username: "Butterfly",
      follow:"follow",
      cardImg: card4,
    },
    {
      id: 5,
      profileImg: profile5,
      username: "Earth",
      follow:"follow",
      cardImg: card5,
    },
    {
      id: 6,
      profileImg: profile6,
      username: "Birds",
      follow:"follow",
      cardImg: card6,
    },
    {
      id: 7,
      profileImg: profile7,
      username: "Universe",
      follow:"follow",
      cardImg: card7,
    },
    {
      id: 8,
      profileImg: profile8,
      username: "Flower",
      follow:"follow",
      cardImg: card8,
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState(cardsData);

  return (
    <section>
      <div className="row">
        <div className="col-sm-3">
          {/* Your left sidebar content */}
          <div className="left-sidebar fixed-sidebar">
            <div className="logo">
              <a href="">Instagram</a>
            </div>
            <ul>
              <li className="active">
                <a href="/home">
                  <GoHomeFill /> Home
                </a>
              </li>
              <li>
                <a href="">
                  <AiFillHeart /> Like Post
                </a>
              </li>
              <li>
                <a href="">
                  <HiDocumentDownload /> Save
                </a>
              </li>
              <li>
                <a href="/video">
                  <RiVideoAddFill /> Videos
                </a>
              </li>
              <li>
                <a href="/ ">
                  <HiOutlineLogout /> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-9">
          <div className="row">
            <div className="right-sidebar">
              {/* Map over the cardsData array to render cards dynamically */}
              {filteredCards.map((card) => (
                <div key={card.id} className="card">
                  <div className="card-title">
                    <div className="row">
                      <div className="profile">
                        <img src={card.profileImg} alt="" />
                      </div>
                      <div className="row">
                      <p className="card-text">{card.username}</p>
                      <a className="follow" href="">{card.follow}</a>
                      </div>
                    </div>
                    <hr />
                  </div>
                  <img
                    className="card-img-top"
                    src={card.cardImg}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <div className="row">
                      <div className="left-icon">
                        {/* Like button */}
                        <LikeButton />
                      </div>
                      <div className="right-icon"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="input">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  const filtered = cardsData.filter((card) =>
                    card.username
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase())
                  );
                  setFilteredCards(filtered);
                }}
              />
            </div>
            <div className="suggestion">
              <div class="card">
                <div class="card-body">
                    <div className="row">
                  <div className="profile">
                      <img src={profile4} alt="" />
                    </div>
                    <h5 class="card-title">Universe</h5>
                    <p className="card-follow">Follow</p>
                  </div>
                  <div className="row">
                  <h6 class="card-subtitle mb-2 text-muted">Follower 500</h6>
                  <h6 class="card-subtitle mb-2 text-muted ml-3">Following 400</h6>
                  </div>
                  <p class="card-text">
                  Followed by Butterfly , Birds and 5 other....
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <div className="row">
                    <div className="profile">
                      <img src={profile4} alt="" />
                    </div>
                    <h5 class="card-title">Birds</h5>
                    <p className="card-follow">Follow </p>
                  </div>
                  <div className="row">
                  <h6 class="card-subtitle mb-2 text-muted">Follower 700</h6>
                  <h6 class="card-subtitle mb-2 text-muted ml-3">Following 500</h6>

                  </div>
                  <p class="card-text">
                  Followed by Astronaut , Butterfly and 5 other....
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                    <div className="row">
                  <div className="profile">
                      <img src={profile4} alt="" />
                    </div>
                    <h5 class="card-title">Astronaut</h5>
                    <p className="card-follow">Follow </p>
                  </div>
                  <div className="row">
                  <h6 class="card-subtitle mb-2 text-muted">Follower 900</h6>
                  <h6 class="card-subtitle mb-2 text-muted ml-3">Following 500</h6>

                  </div>
                  <p class="card-text">
                  Followed by Universal , Birds and 5 other....
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <div className="row">
                    <div className="profile">
                      <img src={profile4} alt="" />
                    </div>
                    <h5 class="card-title">Butterfly</h5>
                    <p className="card-follow">Follow </p>
                  </div>
                  <div className="row">
                  <h6 class="card-subtitle mb-2 text-muted">Follower 1k</h6>
                  <h6 class="card-subtitle mb-2 text-muted ml-3">Following 800</h6>

                  </div>
                  <p class="card-text">
                    Followed by Birds and 5 other....
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
