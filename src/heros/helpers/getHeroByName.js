import { heroes } from "../data/heroes";

export const getHeroByName = (name = 0) => {
  // name = name.toLocaleLowercase().trim();
  if (name.length === 0) {
    return [];
  }
  return heroes.filter((res) =>
    res.superhero.toLocaleLowerCase().includes(name)
  );
  // return heroes.filter((res) => res.superhero === name);
};
