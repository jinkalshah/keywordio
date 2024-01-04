import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const AdForm = ({onBackClick, selectAd}) => {
  const [formData, setFormData]=useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleFormChange = (fieldType, fieldValue) =>{
    setFormData((oldFormData)=>{
      return {
        ...oldFormData,
        [fieldType]: fieldValue
      }
    })
  }
  return (
    <div className='formOne'>
        <h4>Create Text & Media</h4>
         <form>
          <div className="row" style={{display: 'flex'}}>
            <div className="col-md-6" style={{display: 'flex', flexDirection: 'column'}}>
              <div className="form-group">

    <label for="heading01">Heading 01</label>
    <input onChange={(e)=>handleFormChange('heading01',e.target.value)} type="text" placeholder="Add a heading that would make users intrested" className="form-control" id="heading01" />
              </div>
              <div className="form-group">

    <label for="heading02">Heading 02</label>
    <input type="text" onChange={(e)=>handleFormChange('heading02',e.target.value)} placeholder="Add a heading that would make users intrested" className="form-control" id="heading02" />
              </div>

            </div>
            <div className="form-group col-md-6">
            <label for="description01">Descrption 01</label>
            <textarea onChange={(e)=>handleFormChange('description01',e.target.value)} rows={5} id='description01' className='form-control' placeholder='Add primary text to help users understand more about your products,services or offers'></textarea>

            </div>
          </div>
          {
            selectAd === 'mediaAd'
            &&
            <>
            <div className="row">
            <div className=" form-group col-md-4">
            <label for="landscapeImage">Landscape marketing image(1.9:1)</label>
            <input onChange={(e)=>handleFormChange('landscapeImage',e.target.value)} type="text" placeholder="Add the URL of the image you want to use for the ad" className="form-control" id="landscapeImage"  />

            </div>
            <div className=" form-group col-md-4">
            <label for="portraitImage">Portrait marketing image(4:5)</label>
            <input onChange={(e)=>handleFormChange('portraitImage',e.target.value)} type="text" placeholder="Add the URL of the image you want to use for the ad" className="form-control" id="portraitImage"  />

            </div>
            <div className=" form-group col-md-4">
            <label for="squareImage">Square marketing image(1:1)</label>
            <input onChange={(e)=>handleFormChange('squareImage',e.target.value)} type="text" placeholder="Add the URL of the image you want to use for the ad" className="form-control" id="squareImage"  />

            </div>
            
          </div>
          <div className="row">
            <div className=" form-group col-md-12">
            <label for="videoURL">Video URL</label>
            <input onChange={(e)=>handleFormChange('videoURL',e.target.value)} type="text" placeholder="Add the URL of the Video you want to use for the ad" className="form-control" id="videoURL"  />

            </div>
          </div>
            </>
          }
          <div className="row">
            <div className=" form-group col-md-6">
            <label for="businessname">Business Name</label>
            <input onChange={(e)=>handleFormChange('businessname',e.target.value)} type="text" placeholder="Add your business name" className="form-control" id="businessname"  />

            </div>
            <div className="col-md-6 form-group">
              
        <label>
        Button Label
        </label>
        <select onChange={(e)=>handleFormChange('buttonlabel',e.target.value)} placeholder="Select a label that best suits your ad" className="form-control" id="buttonlabel">
          <option />
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
            

            </div>
          </div>
          <div className="row">
            <div className="col-md-12 form-group">
            <label for="websiteUrl">Website URL</label>
            <input onChange={(e)=>handleFormChange('websiteUrl',e.target.value)} type="text" placeholder="Add the URL of the landing page you want to redirect users to" className="form-control" id="websiteUrl"  />

            </div>
            </div>
            <div style={{marginTop: '10px',display: 'flex', justifyContent: 'end'}}>

        <button type='button' onClick={onBackClick} className='btn btn-light m-1'>Back</button>
        <button type='button' onClick={()=>{
          setIsSubmitted(true)
          setTimeout(() => {
            setIsSubmitted(false)
            window.location.reload();
          }, 800);
        }} className='btn btn-primary m-1'>Submit</button>
            </div>
         </form>
         
          <Dialog
          open={isSubmitted}
          onClose={()=>setIsSubmitted(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText style={{padding: '60px 90px', textAlign: 'center'}} id="alert-dialog-description">
              <CheckCircleIcon color='primary'/><br />
              Submitted
            </DialogContentText>
          </DialogContent>
        </Dialog>
    </div>
  )
}

export default AdForm