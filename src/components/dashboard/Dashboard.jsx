import React from 'react'
import { adInsights, genderData } from '../../utils'
import './Dashboard.css'
import Chart from './Chart';
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const Dashboard = () => {
  const adInsightsWithTotal=[...adInsights]
  const adInsightsTotalObj={Clicks:0,Cost:0,Conversions:0,Revenue:0};
  adInsights.forEach((adInfo)=>{
    adInsightsTotalObj.Clicks+=adInfo.Clicks
    adInsightsTotalObj.Cost+=adInfo.Cost
    adInsightsTotalObj.Conversions+=adInfo.Conversions
    adInsightsTotalObj.Revenue+=adInfo.Revenue
  })
  adInsightsWithTotal.push({...adInsightsTotalObj,id:'Total'})
  const getColumns = () =>{
    return Object.keys(adInsightsWithTotal[0]).map(
      (ele)=>{
        if(ele === 'id'){
          return {
            field: 'id',
            headerName: 'Campaigns',
            type: 'String'
          }
        }
        return {
          field:ele,
          type:"number",
          headerName:ele}
      })
  }
  return (
    <div className='container row'>
      <div className="col-md-5 dashBoardDivs">
        <Box sx={{ width: "100%" }}>
          <b>Ad Insights</b>
      <DataGrid disableRowSelectionOnClick={true} rows={adInsightsWithTotal} columns={getColumns()} />
    </Box>
      </div>
      <div className="col-md-6 dashBoardDivs" style={{ padding: '20px', position: 'relative'}}>
        <Chart />
      </div>
    </div>
  )
}

export default Dashboard