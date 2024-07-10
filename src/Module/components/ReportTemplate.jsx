
import SmallTable from './SmallTable';
import CountCard from './CountCard';
import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./Data";
import LineChart from "./LineChart";
import DropdownTop from "./DropdownTop";
import './ReportTemplate.css'

Chart.register(CategoryScale);

const ReportTemplate = ({
  dropdown1title ,
  dropdown2title , 
  dropdown1data ,
  dropdown2data , 
  smallTable1title ,
  smallTable1icon , 
  smallTable1data ,
  smallTable2title ,
  smallTable2icon , 
  smallTable2data ,
  countCard1data ,
  countCard2data ,
  chartTitle 
}) => {
  const [chartData, setChartData] = useState({
    // ...chart data
      labels: Data.map((data) => data.year), 
      datasets: [
        {
          label: "Users Gained ",
          data: Data.map((data) => data.userGain),
          backgroundColor: [
            "white",
          ],
          borderColor: "#938E8E",
          borderWidth: 1
        }
      ]
  });

  return (
    <div className='ReportTemplate'>
      <Container>
      <Row>
        <Col sm={3}><DropdownTop title= {dropdown1title} dataSelect = {dropdown1data}/></Col>
        <Col sm={3}><DropdownTop title= {dropdown2title} dataSelect = {dropdown2data}/></Col>
        
      </Row>
      </Container>
      <Container style={{  background: 'white' }}>
      <Row>
        <Col sm={4}>
        <SmallTable title= {smallTable1title} icon = {smallTable1icon} datatable = {smallTable1data}/>
        <SmallTable title= {smallTable2title} icon = {smallTable2icon} datatable = {smallTable2data}/>
        </Col>
        <Col sm={8}>
        <Row className='myCountCard'>
          <CountCard number= {countCard1data.number} unit = {countCard1data.unit} title = {countCard1data.title} />
          <CountCard number= {countCard2data.number} unit = {countCard2data.unit} title = {countCard2data.title} />
          </Row>
          <LineChart chartTitle={chartTitle}  chartData={chartData} /></Col>
        </Row>
    </Container>
    </div>
  )
}

export default ReportTemplate