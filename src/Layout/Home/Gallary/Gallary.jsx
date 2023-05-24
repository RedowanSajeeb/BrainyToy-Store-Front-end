// import React from "react";
import PhotoAlbum from "react-photo-album";
import photos from "../Gallary/Photos";

const renderContainer = ({ containerProps, children, containerRef }) => (
  <div
    style={{
      border: "2px solid #eee",
      borderRadius: "10px",
      padding: "20px",
    }}
  >
    <div ref={containerRef} {...containerProps}>
      {children}
    </div>
  </div>
);

const renderRowContainer = ({
  rowContainerProps,
  rowIndex,
  rowsCount,
  children,
}) => (
  <>
    <div {...rowContainerProps}>{children}</div>
    {rowIndex < rowsCount - 1 && (
      <div
        style={{
          borderTop: "2px solid #eee",
          marginBottom: "20px",
        }}
      />
    )}
  </>
);

const renderPhoto = ({
 
  layoutOptions,
  imageProps: { alt, style, ...restImageProps },
}) => (
  <div
    style={{
      border: "2px solid #eee",
      borderRadius: "4px",
      boxSizing: "content-box",
      alignItems: "center",
      width: style?.width,
      padding: `${layoutOptions.padding - 2}px`,
      paddingBottom: 0,
    }}
  >
    <img
      alt={alt}
      style={{ ...style, width: "100%", padding: 0 }}
      {...restImageProps}
    />
    <div
      style={{
        paddingTop: "8px",
        paddingBottom: "8px",
        overflow: "visible",
        whiteSpace: "nowrap",
        textAlign: "center",
      }}
    >
      {/* {} */}
    </div>
  </div>
);

export default function Gallary() {
  return (
    <div className="p-3 md:p-5">
      <div className="text-center">
        <h1 className="md:text-5xl text-4xl font-bold mt-14 mb-10 fontStyle">
          Toy Gallery
        </h1>
        <p className="md:w-1/2 mx-auto text-gray-500 md:mt-3 mb-5">
          Welcome to Edu Toy Gallery: Where Learning and Play Come Together!
          <br />
          Our carefully curated collection features toys that combine fun and
          learning seamlessly. 
        </p>
      </div>
      <PhotoAlbum
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
        layout="rows"
        photos={photos}
        spacing={30}
        padding={20}
        targetRowHeight={200}
        renderContainer={renderContainer}
        renderRowContainer={renderRowContainer}
        renderPhoto={renderPhoto}
      />
    </div>
  );
}
