import React,{useEffect, useContext, useState} from 'react';
import { notesRef, tank, reservoir } from "./firebase";
import "./form.css";


const firebaseValues = ["Carregando os Dados..."];
const dataContext = React.createContext(firebaseValues);


const tankValues = ["Carregando nīvel do tanque..."];
const tankContext = React.createContext(tankValues);


const reservoirValues = ["Carregando nível do reservatório..."];
const reservoirContext = React.createContext(reservoirValues);


function ReadNotes() {

    const values = useContext(dataContext);

    const [state, setState] = useState(values);
    const [update, setUpdate] = useState(0);

    
    const values2 = useContext(tankContext);
    const [tankValue, setTank] = useState(values2);


    const values3 = useContext(reservoirContext);
    const [reservoirValue, setReservoir] = useState(values3);


    useEffect(() => {
        notesRef.once('value', (snap) => {
            if (update === 0) {
                let updatedList = [''];
                snap.forEach((item) => {
                    updatedList.push(JSON.stringify(item.toJSON()));
                });
                setState(updatedList);
                updateTank();
                updateReservoir();
                setUpdate(1);
            }
          });
      });


    function teste() {
        notesRef.once('value', (snap) => {
            let updatedList = [''];
            snap.forEach((item) => {
                updatedList.push(JSON.stringify(item.toJSON()));
            });
            setState(updatedList);
          });
    }


    function updateTank() {
        tank.once('value', (snap) => {
            setTank([JSON.stringify(snap)]);
        })
    }


    function updateReservoir() {
        reservoir.once('value', (snap) => {
            setReservoir([JSON.stringify(snap)]);
        })
    }


    return (
        <div>
            <div onClick={teste}>
                <dataContext.Provider value = {state}>
                    <dataContext.Consumer>
                        {value => <p>{value}</p>}
                    </dataContext.Consumer>
                </dataContext.Provider>
            </div>

            <div onClick={updateTank}>
                <tankContext.Provider value = {tankValue}>
                        <tankContext.Consumer>
                            {value => <p>Nível do tank: {value}%</p>}
                        </tankContext.Consumer>
                    </tankContext.Provider>
            </div>

            <div onClick={updateReservoir}>
                <reservoirContext.Provider value = {reservoirValue}>
                        <reservoirContext.Consumer>
                            {value => <p>Nível do reservatório: {value}%</p>}
                        </reservoirContext.Consumer>
                    </reservoirContext.Provider>
            </div>
        </div>
    );
}


export default ReadNotes;