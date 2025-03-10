import { Link } from "react-router"

/* eslint-disable react/prop-types */
const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

    const imgUrls = `../../../assets/heroes/${id}.jpg`

    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={imgUrls} className="img-fluid rounded-start" alt={superhero} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        <p className="card-text">{publisher}</p>
                        {
                            (characters !== alter_ego) && (<p className="card-text">{characters}</p>)
                        }

                        <p className="card-text"><small className="text-body-secondary">{first_appearance}</small></p>
                        <Link to={`/hero/${id}`}>Mas... </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroCard
