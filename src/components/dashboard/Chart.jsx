import React, { useState, useEffect } from "react";
import { PieChart, Pie, Legend, ResponsiveContainer } from "recharts";
import { genderData } from "../../utils";
import TableChartIcon from '@mui/icons-material/TableChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import { Box, MenuItem, Select, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const Chart = () => {
  
  const [view, setView] = useState('pie');
  const genderDataWithTotal=[...genderData]
  const genderDataTotalObj={Clicks:0,Cost:0,Conversions:0,Revenue:0};
  genderData.forEach((adInfo)=>{
    genderDataTotalObj.Clicks+=adInfo.Clicks
    genderDataTotalObj.Cost+=adInfo.Cost
    genderDataTotalObj.Conversions+=adInfo.Conversions
    genderDataTotalObj.Revenue+=adInfo.Revenue
  })
  genderDataWithTotal.push({...genderDataTotalObj,id:'Total'})
  const [data, setData] = useState([]);
  const [dataType,setDataType] = useState('Clicks')
  const wrapperStyle = {
    display: 'block',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: `100%`,
    height: '220px',
  }
  const renderColorfulLegendText = (value: string, entry: any) => {
    console.log(entry)
    return (
      <span style={{ color: "#596579", fontWeight: 500, padding: "10px" }}>
        {`${Math.round(entry?.payload?.percent * 100)}%  ${value}`}
      </span>
    );
  };
  const getColumns = () =>{
    return Object.keys(genderDataWithTotal[0]).map(
      (ele)=>{
        if(ele === 'id'){
          return {
            field: 'id',
            headerName: 'Group',
            type: 'String'
          }
        }
        return {
          field:ele,
          type:"number",
          headerName:ele}
      })
  }
  useEffect(()=>{
    if(dataType){
      const pieData= genderData.map((el)=>{
        return {
          name: el.id,
          value: Math.round(100*el[dataType]/genderDataWithTotal[3][dataType]),
          fill: el.id === 'Male' ? "#ff7f0e" : el.id === 'Female' ? "#1f77b4" : '#000000'
        }
      })
      setData(pieData)
    }
  },[dataType])
  return (
    <div style={{height: '100%'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', height: '30px'}}>
        <b style={{alignSelf: 'center'}}>Ads Insights</b>
  {view === 'pie'
  &&
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Age"
    value={dataType}
    defaultValue={"clicks"}
    onChange={(e)=>setDataType(e.target.value)}
    style={{paddingTop: 'unset', paddingBottom: 'unset'}}
  >
    <MenuItem value='Clicks'>Clicks</MenuItem>
    <MenuItem value='Cost'>Cost</MenuItem>
    <MenuItem value='Conversions'>Conversions</MenuItem>
    <MenuItem value='Revenue'>Revenue</MenuItem>
  </Select>}
      </div>
      <hr />
      {
        view === 'pie'
        ?
        <div style={wrapperStyle}>
        <ResponsiveContainer width={'100%'}>
        <PieChart>
          <Legend
            height={36}
            iconType="rect"
            layout="vertical"
            verticalAlign="middle"
            align="right"
            iconSize={20}
            padding={10}
            formatter={renderColorfulLegendText}
          />
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={90}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          >
          </Pie>
        </PieChart>
        </ResponsiveContainer>
        </div>
        : 
        <Box sx={{ width: "100%" }}>
      <DataGrid disableRowSelectionOnClick={true} rows={genderDataWithTotal} columns={getColumns()} />
    </Box>
      }
        <ToggleButtonGroup
        value={view}
        exclusive
        style={{float: 'right', right: 0, bottom: 0, padding: '20px', position: 'absolute'}}
        onChange={(e,name)=>setView(name)}
        aria-label="text alignment"
      >
        <ToggleButton value="table" aria-label="left aligned">
          <TableChartIcon />
        </ToggleButton>
        <ToggleButton value="pie" aria-label="centered">
          <PieChartIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default Chart;
