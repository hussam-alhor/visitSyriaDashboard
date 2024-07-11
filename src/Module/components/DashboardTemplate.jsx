
import SmallTable from './SmallTable';
import CountCardDashbord from './CountCardDashbord';
import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { DashboardData } from "./DashboardData";
import PieChart from "./PieChart";
import DropdownTop from "./DropdownTop";
import './DashboardTemplate.css'

Chart.register(CategoryScale);

const DashboardTemplate = ({
  dropdown1title ,
  dropdown1data ,
  smallTable1title ,
  smallTable1icon , 
  smallTable1data ,
  smallTable2title ,
  smallTable2icon , 
  smallTable2data ,
  countCard1data ,
  countCard2data ,
  countCard3data ,
  countCard4data ,
  chartTitle 
}) => {
  const [chartData, setChartData] = useState({
    // ...chart data
      labels: DashboardData.map((data) => data.city) ,
      datasets: [
        {
          label: "Users Gained ", 
          data: DashboardData.map((data) => data.userGain),
          backgroundColor: [
            "#7f7f7f",
            "#a0a0a0",
            "#808080",
            "#666666",
            "#d3d3d3",
            "#949494"
          ],
          borderColor: "#938E8E",
          borderWidth: 1
        }
      ]
  });

  return (
    <div className='DashboardTemplate'>
      <Container>
      <Row>
        <Col sm={3}><DropdownTop title= {dropdown1title} dataSelect = {dropdown1data}/></Col>
      </Row>
      </Container>
      <Container style={{  background: 'white' }}>
      <Row>
        <Col sm={12}>
        <Row className='myCountCard'>
        <Col sm={3} >
            <CountCardDashbord  number= {countCard1data.number} unit = {countCard1data.unit} title = {countCard1data.title}  />
            </Col>
            <Col sm={3}>
             <CountCardDashbord   number= {countCard2data.number} unit = {countCard2data.unit} title = {countCard2data.title} />
             </Col>
             <Col sm={3}>
              <CountCardDashbord  number= {countCard3data.number} unit = {countCard3data.unit} title = {countCard3data.title} />
             </Col>
             <Col sm={3}>
              <CountCardDashbord   number= {countCard4data.number} unit = {countCard4data.unit} title = {countCard4data.title} />
             </Col> </Row>
        </Col>
        <Col sm={4}>
        <SmallTable title= {smallTable1title} icon = {smallTable1icon} datatable = {smallTable1data}/>
        <SmallTable title= {smallTable2title} icon = {smallTable2icon} datatable = {smallTable2data}/>
        </Col>
        <Col sm={6}>
        <PieChart chartTitle={chartTitle}  chartData={chartData} /></Col>
        </Row>
    </Container>
    </div>
  )
}

export default DashboardTemplate