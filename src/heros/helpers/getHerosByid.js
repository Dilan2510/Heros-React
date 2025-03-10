import { heroes } from "../data/heroes";
export const getHerosByid = (id) => {
  return heroes.find((res) => res.id === id);
};
