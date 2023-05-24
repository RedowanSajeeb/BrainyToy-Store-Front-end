// import React from 'react';

import { useEffect } from "react";

const Blog = () => {
   useEffect(() => {
     document.title = "Blog";
   }, []);
   return (
     <div className="side-container ms-5 me-5 mx-auto max-w-max">
       <div
         tabIndex={0}
         className="collapse mt-10 mb-10 collapse-plus border border-base-300 bg-base-100 rounded-box"
       >
         <div className="collapse-title text-xl font-medium">
           What is an access token and refresh token? How do they work and where
           should we store them on the client-side?
         </div>
         <div className="collapse-content">
           <p>
             An access token is a credential that provides temporary access to
             protected resources. A refresh token is used to obtain a new access
             token without re-entering credentials. Access tokens are included
             in requests to access resources, while refresh tokens are used to
             request new access tokens. Its important to store tokens securely
             on the client-side.
           </p>
         </div>
       </div>

       <div
         tabIndex={0}
         className="collapse mt-10 mb-10 collapse-plus border border-base-300 bg-base-100 rounded-box"
       >
         <div className="collapse-title text-xl font-medium">
           Compare SQL and NoSQL databases?
         </div>
         <div className="collapse-content">
           <p>
             SQL databases are based on a relational model, use structured
             schemas, ensure data integrity, and are suitable for applications
             with complex data structures. Examples include MySQL and
             PostgreSQL. NoSQL databases are designed for unstructured and
             non-relational data, offer flexibility and scalability, prioritize
             performance over strong consistency, and are suitable for
             applications handling large volumes of data. Examples include
             MongoDB and Redis.
           </p>
         </div>
       </div>
       <div
         tabIndex={0}
         className="collapse mt-10 mb-10  collapse-plus border border-base-300 bg-base-100 rounded-box"
       >
         <div className="collapse-title text-xl font-medium">
           What is express js? What is Next JS?
         </div>
         <div className="collapse-content">
           <p>
             Express.js is a lightweight web application framework for Node.js,
             used for building APIs and web applications. Next.js is a React
             framework that provides server-side rendering, static site
             generation, and other advanced features for building React-based
             web applications.
           </p>
         </div>
       </div>
       <div
         tabIndex={0}
         className="collapse mt-10 mb-20 collapse-plus border border-base-300 bg-base-100 rounded-box"
       >
         <div className="collapse-title text-xl font-medium">
           What is MongoDB aggregate and how does it work?
         </div>
         <div className="collapse-content">
           <p>
             MongoDBs aggregate is a feature for performing advanced data
             aggregation and processing. It uses a pipeline of stages to
             manipulate and aggregate data, including grouping, filtering,
             sorting, and computing results. It allows for flexible and powerful
             data transformations within the database.
           </p>
         </div>
       </div>
     </div>
   );
};

export default Blog;