import React, { Component } from 'react';
import api from '../../../utils/api';

import CardPatient from '../../Organisms/CardPatient';

class PatientList extends Component {
    state={
        patients:[]
    }
    componentDidMount = async()=>{
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
        this.setState({
            patients: fakeData
        })
    }
    render() {
        return (
            <div className="list___patient">
                {this.state.patients.map(patient=><CardPatient patient={patient} />)}
            </div>
        );
    }
}

export default PatientList;
