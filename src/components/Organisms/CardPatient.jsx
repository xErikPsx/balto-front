import React from 'react';
import { Card, Button } from 'antd';
import ListItem from '../Molecules/ListItem';

const { Meta } = Card;

const CardPatient = ({ patient }) => {
  const { age, status, name, id } = patient;
  const metaData = [
    { index: 'Edad: ', value: age },
    { index: 'Estatus: ', value: status },
  ];
  return (
    <Card
      className="patient"
      style={{ width: 250 }}
      cover={
        <img
          alt={`Paciente ${name}`}
          src={'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'}
        />
      }
      actions={[
        <Button type="primary" key={id} block>
          Ver
        </Button>,
      ]}
    >
      <Meta
        title={name}
        description={metaData.map(({ index, value }, i) => (
          <ListItem index={index} value={value} key={i + 'meta'} />
        ))}
      />
    </Card>
  );
};

export default CardPatient;
