import React from "react";
import "./video.css";
import "./home.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { GoHomeFill } from "react-icons/go";
import { AiFillHeart } from "react-icons/ai";
import { HiDocumentDownload, HiOutlineLogout } from "react-icons/hi";
import { RiVideoAddFill } from "react-icons/ri";
const Video = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/video")
      .then((response) => {
        // console.log(response);
        setVideos(response.data);
        console.log(videos);
      })
      .catch((error) => {
        console.log(error, "error fatching data");
      });
  }, []);

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
            {videos.map((video) => (
              <div key={video.id} className="card">
                <div className="card-title">
                  <div className="row">
                    <div className="profile">
                      {/* <img src={url.profileImg} alt="" /> */}
                    </div>
                  </div>
                  <hr />
                </div>
                <video controls>
                      <source src={video.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
              </div>
            ))}
            {/* </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
