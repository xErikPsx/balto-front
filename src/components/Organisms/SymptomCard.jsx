import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

function SymptomCard(props) {
  const { title, description, image } = props;

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={image} />}
    >
      <Meta title={title} description={description} />
    </Card>
  );
}

export default SymptomCard;
