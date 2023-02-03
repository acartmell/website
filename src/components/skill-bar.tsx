import React from "react";
import BEM from "bem-cn";
import "./skill-bar.scss";

const bem = BEM("skill-bar");

interface Props {
  name: string;
  rating: number;
}

function getValidRating(rating: number) {
  if (rating < 0) {
    return 0;
  }
  if (rating > 100) {
    return 100;
  }
  return rating;
}

function SkillBar(props: Props) {
  const { name, rating } = props;

  return (
    <div className={bem()}>
      <div className={bem("name")}>{name}</div>
      <div className={bem("bar")}>
        <div
          className={bem("fill")}
          style={{ width: `${getValidRating(rating)}%` }}
        />
      </div>
    </div>
  );
}

export default SkillBar;
