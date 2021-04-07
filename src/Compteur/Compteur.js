import React from 'react'
import './Compteur.css';
import{useSelector, useDispatch} from 'react-redux'
import Resultat from '../Composants/Resultat/Resultat.js';
import IncrBtn from '../Composants/IncrBtn/IncrBtn.js';

export default function Compteur() {
    
    const count = useSelector (state => state.compteur)
    const dispatch = useDispatch();


    const incrementCount = () => {
        dispatch({
            type:'INCREMENTE'
        })
    }

    const decrementCount = () => {
        dispatch({
            type:'DECREMENTE'
        })
    }
        return (
            <div className="cont">
                <div className="blocConmpt">
                    <Resultat valeur={count} />
                </div>
                <div className="contBtn">
                    <IncrBtn txt="Incremente" clicked={incrementCount} />
                    <IncrBtn txt="Decremente" clicked={decrementCount} />
                </div>
            </div>
        )
}
