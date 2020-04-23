import React from 'react';
import './card-styles.css';

interface Props {
  monster: Monster;
}
interface Monster {
  id: string;
  name: string;
  email: string;
}

export const Card = ({ monster }: Props): React.ReactElement => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${monster.id}?set=set2`} alt="monster" />
      <h1>{monster.name}</h1>
      <p>{monster.email}</p>
    </div>
  );
};
