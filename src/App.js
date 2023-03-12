import React, { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner.jsx"
import Search from "./components/Search/Search.jsx"
import axios from "axios";
import GridItems from "./components/GridItems/GridItems.jsx";
const App =() =>{
  const [capsules,setCapsules] = useState([]);
  const [selectedStatus,setSelectedStatus] = useState();
  const [selectedLaunch,setSelectedLaunch] = useState();
  const [selectedType,setSelectedType] = useState();
  const [loader,setLoader] = useState(false);

  useEffect(() =>{
    setLoader(true);
     axios.get("https://api.spacexdata.com/v3/capsules",{
      params:{
        status:selectedStatus,
        original_launch:selectedLaunch,
        type:selectedType,
      }
     }).then((response) => {
      const {data,status} = response; 
      if(status){
        setCapsules(data);
        setLoader(false);
      }
    }).catch((e) =>{
      console.log(e)
      setLoader(false);
    })
  },[selectedStatus,selectedLaunch,selectedType])
  
  return(
    <React.Fragment>
        <Banner />
        <Search setSelectedStatus={setSelectedStatus}  setSelectedLaunch={setSelectedLaunch} setSelectedType={setSelectedType}/>
        <GridItems capsules={capsules} loader={loader} setCapsules={setCapsules}/>
    </React.Fragment>
  )
}

export default App