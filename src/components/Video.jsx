import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Video = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://example.com/api/videos');
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="container">
      <h1>Video List</h1>
      <div className="row">
        {videos.map(video => (
          <div key={video.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{video.title}</h5>
                <p className="card-text">{video.description}</p>
                <video controls>
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
