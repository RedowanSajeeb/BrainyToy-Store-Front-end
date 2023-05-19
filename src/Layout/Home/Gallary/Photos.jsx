const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id, width, height) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
  { id: "3EuPcI31MQU", width: 1080, height: 800 },
  { id: "nvKQ1kxheRc", width: 1080, height: 1620 },
  { id: "Xz7MMD5tZwA", width: 1080, height: 720 },
  { id: "0Fd_bRYysT4", width: 1080, height: 721 },
  { id: "pj9_XP12zLs", width: 1080, height: 1620 },
  { id: "wjwmug0yvHM", width: 1080, height: 607 },
  // { id: "-heLWtuAN3c", width: 1080, height: 608 },
  // { id: "xOigCUcFdA8", width: 1080, height: 720 },
  // { id: "1azAjl8FTnU", width: 1080, height: 1549 },
  // { id: "ALrCdq-ui_Q", width: 1080, height: 720 },
  // { id: "twukN12EN7c", width: 1080, height: 694 },
  { id: "ayH7wwVOtc0", width: 1080, height: 1620 },
  { id: "hLvQ4-QEBAE", width: 1080, height: 720 },
  { id: "uxUYb-Acy-k", width: 1080, height: 1440 },
  { id: "OO89_95aUC0", width: 1080, height: 1620 },
  { id: "kQ7eDgjP5po", width: 1080, height: 810 },
  { id: "AXc2uwl4Cik", width: 1080, height: 610 },
  // { id: "X48pUOPKf7A", width: 1080, height: 160 },
  // { id: "GbLS6YVXj0U", width: 1080, height: 810 },
  // { id: "9CRd1J1rEOM", width: 1080, height: 720 },
  // { id: "xKhtkhc9HbQ", width: 1080, height: 1440 },
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
