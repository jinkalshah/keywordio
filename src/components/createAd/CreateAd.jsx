import React, { useState } from "react";
import "./CreateAd.css";
import 'bootstrap/dist/css/bootstrap.css';
import textAd from "./image/textad.png";
import mediaAd from "./image/mediaad.png";
import AdForm from "./AdForm";



const CreateAd = () => {
  const [selectAd, setSelectAd] = useState("");
  const [isNextClicked,setIsNextClicked]= useState(false)

  return (
    <div className="mainDiv">
      <div style={{margin:"10px 10px 20px 20px", backgroundColor:"white"}}>
      {
        !isNextClicked
        ?
        <>
        
        <h4>Create Ads</h4>
    <div className="container">
    
      <div className="container-1">
        <label className="label">
          <input
            type="radio"
            name="checkbox"
            value="text"
            style={{ verticalAlign: "top", marginLeft: '10px' }}
            onClick={() => setSelectAd("textAd")}
          />
          <img src={textAd} alt="textad" width={250} height={300} style={{marginTop:"15px",marginLeft:"10px",marginRight:"20px"}} />
          <br />
          <div style={{backgroundColor:"#F0F0F0", paddingBottom: '10px'}}>
          <p style={{paddingTop: '20px'}}>Create<br/><p style={{fontWeight:"bold"}}>Text Ad</p></p>
          
          </div>
        </label>
      </div>
      <div className="container-2">
        <label className="label">
          <input
            type="Radio"
            name="checkbox"
            value="text"
            style={{ verticalAlign: "top", marginLeft: '10px' }}
            onClick={() => setSelectAd("mediaAd")}
          />
          <img src={mediaAd} alt="mediaAd" width={250} height={300} style={{marginTop:"15px",marginLeft:"5px",marginRight:"10px"}} />
          <br />
          <div style={{backgroundColor:"#F0F0F0", paddingBottom:"10px"}}>
          <p style={{paddingTop: '20px'}}>Create<br /><p style={{fontWeight:"bold"}}>Media Ad</p></p>
          
          </div>

        </label> 
        
      </div>
      
    </div>
    <button type="submit" disabled={!selectAd} onClick={()=>setIsNextClicked(true)} className="btn btn-primary" style={{float:"right", marginRight: '40px', width: '100px'}}>Next</button>
      </>
    
      :
      <AdForm selectAd={selectAd} onBackClick={()=>setIsNextClicked(false)} />
    }
        </div>
    </div>
  );
};

export default CreateAd;
