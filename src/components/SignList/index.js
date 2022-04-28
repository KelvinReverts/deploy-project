import React from "react";
import Title from '../Title';

import './style.css'
import ItemList from "../ItemList";

export default function SignList(){
    return(
        <div>
            <Title/>

            <div className="list">

                <ItemList sign="Aquarius" startDate="19/02" endDate="19/02" img="assets/aquario.jpg"/>
                <ItemList sign="Peixe" startDate="20/02" endDate="20/03" img="assets/peixes.jpg"/>
                <ItemList sign="Aries" startDate="21/03" endDate="20/04" img="assets/aries.jpg"/>
                <ItemList sign="Touro" startDate="21/04" endDate="21/05" img="assets/touro.jpg"/>
                <ItemList sign="Gemeos" startDate="22/05" endDate="21/06" img="assets/gemeos.jpg"/>
                <ItemList sign="Cancer" startDate="21/06" endDate="23/07" img="assets/cancer.jpg"/>
                <ItemList sign="Leao" startDate="24/07" endDate="23/08" img="assets/leao.jpg"/>
                <ItemList sign="Virgem" startDate="24/08" endDate="23/09" img="assets/virgem.jpg"/>
                <ItemList sign="Libra" startDate="24/09" endDate="23/10" img="assets/libra.jpg"/>
                <ItemList sign="Escorpiao" startDate="24/10" endDate="22/11" img="assets/escorpiao.jpg"/>
                <ItemList sign="Sagitario" startDate="23/11" endDate="21/12" img="assets/sagitario.jpg"/>
                <ItemList sign="Capricornio" startDate="22/12" endDate="20/01" img="assets/capricornio.jpg"/>

            </div>
        </div>
    )
}