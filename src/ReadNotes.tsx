import React,{useEffect, useContext, useState} from 'react';
import { notesRef, tank, reservoir, condominium } from "./firebase";
import "./form.css";
import tank_asset from "./assets/tank_asset.png"
import reservoir_asset from "./assets/reservoir_asset.png"
import condominium_asset from "./assets/condominium_asset.png"


const firebaseValues = ["Carregando os Dados..."];
const dataContext = React.createContext(firebaseValues);


const tankValues = ["Carregando nīvel do tanque..."];
const tankContext = React.createContext(tankValues);


const reservoirValues = ["Carregando nível do reservatório..."];
const reservoirContext = React.createContext(reservoirValues);


const condominiumValues = ["Carregando nível do condomínio..."];
const condominiumContext = React.createContext(condominiumValues);


function ReadNotes() {

    const values = useContext(dataContext);

    const [state, setState] = useState(values);
    const [update, setUpdate] = useState(0);

    
    const values2 = useContext(tankContext);
    const [tankValue, setTank] = useState(values2);


    const values3 = useContext(reservoirContext);
    const [reservoirValue, setReservoir] = useState(values3);


    const values4 = useContext(condominiumContext);
    const [condominiumValue, setCondominium] = useState(values4);


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
                updateCondominium();
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


    function updateCondominium() {
        condominium.once('value', (snap) => {
            setCondominium([JSON.stringify(snap)]);
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

            <div onClick={updateTank} className="tankCard">
                <img src={tank_asset} alt="Tank" />;
                <tankContext.Provider value = {tankValue}>
                        <tankContext.Consumer>
                            {value => <p>Nível do tanque: {value}%</p>}
                        </tankContext.Consumer>
                    </tankContext.Provider>
            </div>

            <div onClick={updateReservoir} className="reservoirCard">
                <img src={reservoir_asset} alt="Tank" />;
                <reservoirContext.Provider value = {reservoirValue}>
                        <reservoirContext.Consumer>
                            {value => <p>Nível do reservatório: {value}%</p>}
                        </reservoirContext.Consumer>
                    </reservoirContext.Provider>
            </div>

            <div onClick={updateCondominium} className="condominiumCard">
                <img src={condominium_asset} alt="Tank" />;
                <condominiumContext.Provider value = {condominiumValue}>
                        <condominiumContext.Consumer>
                            {value => <p>Nível do condomínio: {value}%</p>}
                        </condominiumContext.Consumer>
                    </condominiumContext.Provider>
            </div>
        </div>
    );
}


export default ReadNotes;