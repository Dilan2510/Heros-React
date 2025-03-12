import queryString from "query-string";
import { useLocation, useNavigate } from "react-router";
import { useForm } from "../../hooks/useForm";
import HeroCard from "../components/HeroCard";
import { getHeroByName } from "../helpers/getHeroByName";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const heros = getHeroByName(q)
  const { searchText, onInputChange } = useForm({ searchText: q })
  
  
  const onSearchSubmmit = (event) => {
    event.preventDefault();
    if (searchText.length <= 1) {
      return;
    }
    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <form onSubmit={onSearchSubmmit}  >
            <input type="text"
              className="form-control" name="searchText"
              autoComplete="off" placeholder="Search hero"
              value={searchText} onChange={onInputChange} />
            <button className="btn btn-outline-primary mt-4">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          {(q === "") ? <div className="alert alert-primary" role="alert">
            Search a hero
          </div> : (heros.length === 0) && <div className="alert alert-danger" role="alert">
            there is not hero <b>{q}</b>
          </div>}
          {heros.map((res) => (<HeroCard key={res.id} {...res} />))}
        </div>

      </div>
    </>
  );
};
