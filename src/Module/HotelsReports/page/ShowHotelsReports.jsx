import React from 'react'
import SideBar from '../../SideBar/SideBar'
import ReportTemplate from '../../components/ReportTemplate'
import iconPerson from "/public/assets/img/person.svg";
import iconStar from "/public/assets/img/Star.svg";

const dataSelect1 = [{key: 0 , value: "كانون الثاني" } , {key: 1 , value: "شباط" } , {key: 2 , value: "آذار" }]
const dataSelect2 = [{key: 0 , value: "دمشق" } , {key: 1 , value: "حماه" } , {key: 2 , value: "اللاذقية" }]
const datatable1 = [{name: "فندق" ,number: "50" },{name: "فندق" ,number: "40" },{name: "فندق" ,number: "25" },{name: "فندق" ,number: "20" },{name: "فندق" ,number: "5" }]
const datatable2 = [{name: "فندق" ,number: "4.9" },{name: "فندق" ,number: "4.2" },{name: "فندق" ,number: "3.25" },{name: "فندق" ,number: "3.00" },{name: "فندق" ,number: "2.12" }]
const datacard1 = {number:"1500$", unit:"", title:" مجموع قيمة الحجوزات "} ;
const datacard2 = {number:"117", unit:"حجز", title:" مجموع حجوزات الفنادق"} ; 


const ShowHotelsReports = () => {
  return (
    <div className='sidFlex'>
      <SideBar/>
      <ReportTemplate
      dropdown1title = "خلال شهر"
      dropdown2title = "محافظة  "
      dropdown1data = {dataSelect1}
      dropdown2data = {dataSelect2}
      smallTable1title = "الفنادق الأكثر حجزا" 
      smallTable1icon = {iconPerson}
      smallTable1data = {datatable1}
      smallTable2title =  "الفنادق الأعلى تقييماً" 
      smallTable2icon = {iconStar} 
      smallTable2data = {datatable2}
      countCard1data = {datacard1}
      countCard2data = {datacard2}
      chartTitle = "مخطط الحجوزات "
      />
      </div>
  )
}

export default ShowHotelsReports