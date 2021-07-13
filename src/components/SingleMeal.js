import React from "react";
import { Link } from "react-router-dom";
import { ModalLink } from "react-router-modal-gallery";

export default function SingleMeal({ image, name, id }) {
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
          <ModalLink to={{ pathname: `/singlemeal/${id}` }} className="btn">
            details
          </ModalLink>
        </div>
      </article>
    </>
  );
}
