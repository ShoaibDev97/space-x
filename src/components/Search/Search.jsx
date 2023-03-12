import React , {useEffect, useState} from "react";
import "./Search.css"
const Search = ({setSelectedStatus,setSelectedLaunch,setSelectedType}) => {
    const [status,setStatus] = useState(["retired","unknown","active","destroyed"]);
    const [originalLaunch,setOriginalLaunch] = useState(
        ["2010-12-08T15:43:00.000Z","2012-05-22T07:44:00.000Z","2012-10-08T00:35:00.000Z","2013-03-01T19:10:00.000Z","2014-04-18T19:25:00.000Z","2014-09-21T05:52:00.000Z","2015-01-10T09:47:00.000Z","2015-04-14T20:10:00.000Z","2015-06-28T14:21:00.000Z","2016-04-08T20:43:00.000Z","2016-07-18T04:45:00.000Z","2017-02-19T14:39:00.000Z","2017-08-14T16:31:00.000Z","2019-03-02T07:45:00.000Z","2020-01-19T14:00:00.000Z","2020-05-30T19:22:00.000Z"]
    );
    const [type,setType] = useState(["Dragon 1.0","Dragon 1.1","Dragon 2.0"]);


    return (
        <form className="search__form">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <label htmlFor="status">Search Capsules By Status</label>
                        <select onChange={(e) => setSelectedStatus(e.target.value)}>
                            <option value="" disabled selected>Status</option>
                            {status.map((item,index) =>{
                                return(
                                    <option key={index} value={item}>{item}</option>
                                )
                            })}
                            <option value="">All</option>
                        </select>
                    </div>
                    
                    <div className="col-12 col-md-6 col-lg-4">
                        <label htmlFor="status">Search Capsules By Status</label>
                        <select onChange={(e) => setSelectedLaunch(e.target.value)}>
                            <option disabled selected value="">Orginal Launch</option>
                            {originalLaunch.map((item,index) =>{
                                return(
                                    <option key={index} value={item}>{item}</option>
                                )
                            })}
                             <option value="">All</option>
                        </select>
                    </div>
                
                    <div className="col-12 col-md-12 col-lg-4">
                        <label htmlFor="status">Search Capsules By Type</label>
                        <select onChange={(e) => setSelectedType(e.target.value)}>
                            <option disabled selected value="">Type</option>
                            {type.map((item,index) =>{
                                return(
                                    <option key={index} value={item}>{item}</option>
                                    )
                                })}
                                <option value="">All</option>
                        </select>
                    </div> 
                </div>
            </div>
        </form>
    )
}

export default Search