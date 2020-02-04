import React from 'react'
import { Link } from 'react-router-dom'

const MushroomCard = ({ _id, name, scientificName, img, edible, description }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
    <Link to={`/mushrooms/${_id}`}>
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">{name}/{scientificName}</h4>
        </div>
        <div className="card-image">
          <figure className="image is-4by5">
            <img src={img} alt={name} />
          </figure>
        </div>
        <div><p>{description}</p></div>
      </div>
    </Link>
  </div>
)

export default MushroomCard

