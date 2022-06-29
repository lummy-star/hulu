import React from "react";
import requests from "../Utils/requests";
import FlipMove from "react-flip-move";
import Thumbnail from "./Thumbnail";

const Result = ({ results }) => {
  return (
    <FlipMove className="px-10 my-10 sm:grid md:grid-cols-4  xl-grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
};

export default Result;
