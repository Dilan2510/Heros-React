import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHerosByid } from "../helpers";
import { useMemo } from "react";


export const HeroPage = () => {
  const { id } = useParams();
  const hero = useMemo(() => getHerosByid(id), [id])
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1)
  }


  if (!hero) {
    return <Navigate to="/marvel" />
  }

  return (
    <>
      <div className="card mb-3 animate__animated animate__fadeInLeft " id="card-heroPage" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={`../../../assets/heroes/${id}.jpg`} className="card-img-top" alt={hero.superhero} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{hero.superhero}</h5>
              <ul>
                <li>{hero.alter_ego}</li>
                <li>{hero.publisher}</li>
                <li><small className="text-body-secondary">{hero.first_appearance}</small></li>
              </ul>
              <h6>Characters</h6>
              <p>{hero.characters}</p>
              <div className="d-grid gap-2 col-6 mx-auto" id="card-heroPage_button">
                <button onClick={onNavigateBack} className="btn btn-primary" type="button">Back</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
