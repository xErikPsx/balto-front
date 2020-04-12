import React, { useState, useEffect } from 'react';
import api from '../../../utils/api';

import CardPatient from '../../Organisms/CardPatient';

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const madeApiRequest = async () => {
    const { response, error } = await api.request(
      'GET',
      'patients/?offset=0&limit=100'
    );
    if (!error) {
      setPatients(response.data);
    }
  };
  useEffect(() => {
    madeApiRequest();
  }, []);
  return (
    <div className="list___patient">
      {patients.map((patient) => (
        <CardPatient patient={patient} key={patient.id} />
      ))}
    </div>
  );
};

export default PatientList;
