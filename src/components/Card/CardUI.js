import { Badge } from "@mui/material";
import React from "react";
import "./CardUI.css";

export default function CardUI({
  title,
  category,
  description,
  discountPercentage,
  id,
  price,
  rating,
  stock,
  brand,
  thumbnail,
}) {
  return (
    <div className="media">
      <Badge badgeContent={rating} color="primary" />
      <img className="poster" src={thumbnail} alt={title}></img>
      <b className="title">{title}</b>
      <div className="subTitle">
        <span>{category}</span>
        <span>${price}</span>
      </div>
    </div>
  );
}
