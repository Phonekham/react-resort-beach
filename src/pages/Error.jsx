import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";

const Error = () => {
  return (
    <div>
      <Hero>
        <Banner title="Page not found">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
    </div>
  );
};

export default Error;
