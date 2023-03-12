import React, { useState } from "react";
import "./GridItems.css";
import Loader from "../../assets/images/loader/loader.svg"
import CustomModal from "../Modal/Modal";

const GridItems = ({capsules,loader}) =>{
    const [showModal,setShowModal] = useState(false);
    const [selectedCapsule,setSelectedCapsule] = useState({});

    const handlerFetchColor = (status) =>{
        switch(status){
            case "retired" :
                return "#418dc9" 
            case "unknown":
                return "#b385dd"
            case "destroyed":
                return "#d9a04a"
            default:
                return "#ef77b6"
        }
    }

    return(
        <div className="grid__item__wrapper">
            <div className="container">
               
                {!loader ? (    
                <div className="row">
                {capsules.length > 0 ? capsules.map((cap,index) =>{
                    return(
                      <div className="col-12 col-md-6 col-lg-4" key={index}>
                        <div className="card">
                            <div className="status" style={{backgroundColor:`${handlerFetchColor(cap.status)}`}}>{cap.status}</div>
                            <div>
                                <h2>{cap.capsule_serial}</h2>
                                <p>Capsule Id : <span>{cap.capsule_id}</span></p>
                                <p>Landings : <span>{cap.landings}</span></p>
                                <p>Type : <span>{cap.type}</span></p>
                            </div>
                            <button onClick={() => {setSelectedCapsule(cap); setShowModal(true)}}>Learn More</button>
                        </div>
                      </div>  
                    )
                }):<div className="no__result">
                        No Result Found
                    </div>}
                </div>) :  <div className="text-center">
                     <img src={Loader} alt="" />
                </div>}
                        
                {/* <Modal /> */}
                <CustomModal selectedCapsule={selectedCapsule} show={showModal} onHide={() => setShowModal(false)} />
            
            </div>
        </div>
    )
}

export default GridItems;