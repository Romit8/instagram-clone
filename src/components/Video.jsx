import React from 'react';
import './video.css'
import video1 from '../assests/video/8878320-hd_1080_1920_25fps.mp4'
import { GoHomeFill } from "react-icons/go";
import { AiFillHeart } from "react-icons/ai";
import { HiDocumentDownload, HiOutlineLogout } from "react-icons/hi";
import { RiVideoAddFill } from "react-icons/ri";
const Video = () => {
  const videos = [
    {
      title: 'Video 1',
      description: 'Description for Video 1',
      videoUrl: video1,
    },
   
  ];

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
    <div className="video-container">
      {videos.map((video, index) => (
        <div key={index} className="video-card">
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <video controls >
            <source src={video.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
    </div>
    </div>
    
  );
};

export default Video;
