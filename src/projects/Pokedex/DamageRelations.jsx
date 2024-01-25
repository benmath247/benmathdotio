import React, { useState } from 'react';
import './DamageRelations.css'; // Import a CSS file for styling
import { Link } from 'react-router-dom';

const DamageRelations = ({ damage_relations }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Add the 'damage-relations-hidden' class conditionally
  const containerClasses = `damage-relations-container ${
    isVisible ? '' : 'damage-relations-hidden'
  }`;

  return (
    <>
      <div className='hide-button' onClick={toggleVisibility}>
        {isVisible ? 'Hide Damage Relations' : 'Show Damage Relations'}
      </div>
      {isVisible &&   <div className={containerClasses}>
      <div className="damage-heading-container">
        <h4 style={{ paddingTop: '10px' }}>Damage Relations</h4>
      </div>
      <div className='row'>
        {/* First row */}
        <div className='col'>
          {/* Column 1 */}
          <div className="damage-type">
            <div className="damage-type-container">
              <h5 style={{ paddingTop: '10px' }}>Double Damage From:</h5>
            </div>
            <ul className="damage-list">
              {damage_relations.double_damage_from.map((type, index) => (
                <Link to={`/pokedex/type/${type.name}`} key={index}>
                  <li className="damage-item grow-on-hover-medium">
                    {type.name.toUpperCase()}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className='col'>
          {/* Column 2 */}
          <div className="damage-type">
            <div className="damage-type-container">
              <h5 style={{ paddingTop: '10px' }}>Double Damage To:</h5>
            </div>
            <ul className="damage-list">
              {damage_relations.double_damage_to.map((type, index) => (
                <Link to={`/pokedex/type/${type.name}`} key={index}>
                  <li className="damage-item grow-on-hover-medium">
                    {type.name.toUpperCase()}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className='col'>
          {/* Column 3 */}
          <div className="damage-type">
            <div className="damage-type-container">
              <h5 style={{ paddingTop: '10px' }}>Half Damage From:</h5>
            </div>
            <ul className="damage-list">
              {damage_relations.half_damage_from.map((type, index) => (
                <Link to={`/pokedex/type/${type.name}`} key={index}>
                  <li className="damage-item grow-on-hover-medium">
                    {type.name.toUpperCase()}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className="damage-type">
            <div className="damage-type-container">
              <h5 style={{ paddingTop: '10px' }}>Half Damage To:</h5>
            </div>
            <ul className="damage-list">
              {damage_relations.half_damage_to.map((type, index) => (
                <Link to={`/pokedex/type/${type.name}`} key={index}>
                  <li className="damage-item grow-on-hover-medium">
                    {type.name.toUpperCase()}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className='col'>
          <div className="damage-type">
            <div className="damage-type-container">
              <h5 style={{ paddingTop: '10px' }}>No Damage From:</h5>
            </div>
            <ul className="damage-list">
              {damage_relations.no_damage_from.map((type, index) => (
                <Link to={`/pokedex/type/${type.name}`} key={index}>
                  <li className="damage-item grow-on-hover-medium">
                    {type.name.toUpperCase()}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className='col'>
          <div className="damage-type">
            <div className="damage-type-container">
              <h5 style={{ paddingTop: '10px' }}>No Damage To:</h5>
            </div>
            <ul className="damage-list">
              {damage_relations.no_damage_to.map((type, index) => (
                <Link to={`/pokedex/type/${type.name}`} key={index}>
                  <li className="damage-item grow-on-hover-medium">
                    {type.name.toUpperCase()}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>}
    </>
  );
}

export default DamageRelations;
