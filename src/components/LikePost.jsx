import React, { useState } from "react";

const LikedPost = () => {
  const [likedPosts, setLikedPosts] = useState([]);

  return (
    <div>
      <h2>Liked Posts</h2>
      <ul>
        {likedPosts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
  );
};

export default LikedPost;
