/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import HeroCard from "./HeroCard";

export const HerosList = ({ publisher }) => {
  const heros = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
        {heros.map(res => (<HeroCard key={res.id} {...res} />)
        )}
      </div>

    </>
  );
};
