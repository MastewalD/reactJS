import { toBeRequired } from '@testing-library/jest-dom/matchers';
import React from 'react';

function Exercise2() {
const planets=[
{name:"Mars",isGasPlanet:false},
{name:"Earth",isGasPlanet:false},
{name:"Jupiter",isGasPlanet:true},
{name:"Venus",isGasPlanet:false},
{name:"Neptune",isGasPlanet:true},
{name:"Uranus",isGasPlanet:true}
]
  return (
    <div>
      {planets.map((planet,key)=>{
        return(
          <div>
          {planet.isGasPlanet&&<h1>{planet.name}</h1>}
          </div>
        )
      })}
    </div>
  );
}

export default Exercise2;
