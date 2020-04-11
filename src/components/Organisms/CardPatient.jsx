import React from 'react';
import { Card,Button } from 'antd';
import { Link } from 'react-router-dom'

import ListItem from '../Molecules/ListItem';

const { Meta } = Card;

const CardPatient = ({patient}) => {
    const { age,status,name,pictureUrl,id } = patient;
    const metaData = [{index:"Edad: ",value:age},{index:"Estatus: ",value:status}]
    return (
        <Card
        className="patient"
    style={{ width: 250 }}
    cover={
      <img
        alt={`Paciente ${name}`}
        src={pictureUrl}
      />
    }
    actions={[
        <Link to={`/patient/${id}`}>
            <Button type="primary" key="setting" block>Ver</Button>,
        </Link>
    ]}
  >
    <Meta
      title={name}
      description={metaData.map(({index,value})=><ListItem index={index} value={value} />)}
    />
  </Card>
    );
}

export default CardPatient;
