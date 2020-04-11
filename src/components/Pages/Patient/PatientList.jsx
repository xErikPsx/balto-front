import React, { useState,useEffect } from 'react';
import api from '../../../utils/api';

import CardPatient from '../../Organisms/CardPatient';

const PatientList = () => {
    const [patients,setPatients] = useState([]);
    const getPatientData = async() => await  madeApiRequest();
    const madeApiRequest = async()=>{
        // const { response,error } = await api.request("GET",'/patients');
        // if(!error){
            //     this.setState({
        //         patients: response.data.data
        //     });
        // }else{
        //     // TODO: Use Alert Wrapper
        // }
        const fakeData = [
            {id:0,age:10,status:'Estable',name:'Juan José MiraMar MiraTierra',pictureUrl:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
            {id:1,age:10,status:'Estable',name:'Juan José MiraMar MiraTierra',pictureUrl:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
            {id:2,age:10,status:'Estable',name:'Juan José MiraMar MiraTierra',pictureUrl:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
            {id:3,age:10,status:'Estable',name:'Juan José MiraMar MiraTierra',pictureUrl:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
        ];
        setPatients(fakeData);
        
    }
        useEffect(()=> {madeApiRequest()},[]);
        return (
            <div className="list___patient">
                {patients.map(patient=><CardPatient patient={patient} key={patient.id} />)}
            </div>
        );
    
}

export default PatientList;
