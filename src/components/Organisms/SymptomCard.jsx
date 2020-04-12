import React from 'react';
import { Card } from 'antd';
// * Assets
import { symptomsRoutes } from '../../assets/symptomsRoutes';

const { Meta } = Card;

function SymptomCard(props) {
  const { title, description, symptomOption } = props;

  return (
    <Card
      className="symptomCard"
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src={symptomsRoutes(symptomOption)}
          style={{ height: 140 }}
        />
      }
    >
      <Meta title={title} description={description} />
    </Card>
  );
}

export default SymptomCard;
