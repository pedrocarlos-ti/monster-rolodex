import React from 'react';
import { Card } from '../card/card-component';
import './card-list-styles.css';

interface Props {
  children?: object;
  monsters: Monsters[];
}

interface Monsters {
  id: string;
  name: string;
  email: string;
}

export const CardList = ({ monsters }: Props): React.ReactElement => {
  console.log('oi', monsters);

  return (
    <div className="card-list">
      {monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
