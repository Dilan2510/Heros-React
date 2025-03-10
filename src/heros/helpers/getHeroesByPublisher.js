import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const activePublisher = ["DC Comics", "Marvel Comics"];

  if (!activePublisher.includes(publisher)) {
    throw new Error(`${publisher} No se encuentra`);
  }
  return heroes.filter((res) => res.publisher === publisher);
};
