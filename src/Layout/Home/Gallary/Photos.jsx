// import React from "react";
// import { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id, width, height) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
  { id: "8gVv6nxq6gY", width: 1080, height: 800 },
  { id: "Dhmn6ete6g8", width: 1080, height: 1620 },
  { id: "Dhmn6ete6g8", width: 1080, height: 1620 },
  { id: "Dhmn6ete6g8", width: 1080, height: 1620 },
  { id: "8gVv6nxq6gY", width: 1080, height: 800 },
  { id: "Dhmn6ete6g8", width: 1080, height: 1620 },
  { id: "8gVv6nxq6gY", width: 1080, height: 800 },
  { id: "8gVv6nxq6gY", width: 1080, height: 800 },

  // ... rest of the photos
];

const photos = unsplashPhotos.map((photo) => ({
  src: unsplashLink(photo.id, photo.width, photo.height),
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: unsplashLink(photo.id, breakpoint, height),
      width: breakpoint,
      height,
    };
  }),
}));

export default photos;
