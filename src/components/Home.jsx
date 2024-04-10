import React from "react";
import axios from "axios";
import "./home.css";
import { useState, useEffect } from "react";

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

export const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        // response.json();
        setUsers(response.data);
        setFilteredUsers(response.data);
        console.log(users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // search
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.username.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchQuery, users]);

  return (
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
                <GoHomeFill />
                Home
              </a>
            </li>
            <li>
              <a href="">
                <AiFillHeart />
                Like Post
              </a>
            </li>
            <li>
              <a href="">
                <HiDocumentDownload />
                Save
              </a>
            </li>
            <li>
              <a href="/video">
                <RiVideoAddFill />
                Videos
              </a>
            </li>
            <li>
              <a href="/ ">
                <HiOutlineLogout />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-sm-9">
        <div className="row">
          <div className="right-sidebar">
            {filteredUsers.map((user) => (
              <div key={user.id} className="card">
                <div className="card-title">
                  <div className="row">
                    <div className="profile">
                      <img src={user.profileImg} alt="" />
                    </div>
                    <div className="row">
                      <p className="card-text">{user.username}</p>
                      <a className="follow" href="">
                        {user.follow}
                      </a>
                    </div>
                  </div>
                  <hr />
                </div>
                <img
                  className="card-img-top"
                  src={user.cardImg}
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
            {/* </ul> */}
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
                const filtered = users.filter((card) =>
                  card.username
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
                );
              }}
            />
          </div>
          <div className="suggestion">
            <div class="card">
              {filteredUsers.map((user) => (
                <div className="row">
                  <div key={user.id} className="card">
                    <div className="card-title">
                      <div className="row">
                        <div className="profile">
                          <img src={user.profileImg} alt="" />
                        </div>
                        <div className="row">
                          <p className="card-text">{user.username}</p>
                          <a className="follow" href="">
                            {user.follow}
                          </a>
                        </div>
                        <div className="row">
                          <h6 class="card-subtitle mb-2 text-muted">
                            {user.followers}
                          </h6>
                          <h6 class="card-subtitle mb-2 text-muted ml-3">
                            {user.following}
                          </h6>
                        </div>{" "}
                        <p class="card-text">{user.seeMore}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

