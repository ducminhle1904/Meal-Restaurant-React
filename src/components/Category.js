import React from "react";
import { Link } from "react-router-dom";
export default function Category({ image, name, id }) {
  return (
    <>
      <article className="category">
        <img
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover",
          }}
        />
        <div className="category-footer">
          <h3>{name}</h3>
          <Link to={`/category/${id}`} className="btn">
            details
          </Link>
        </div>
      </article>
    </>
  );
}
