import React from 'react'
import SideBar from '../../SideBar/SideBar'
import DashboardTemplate from '../../components/DashboardTemplate'
import iconmony from "./../../../../public/assets/img/mony.png";
import iconhjz from "./../../../../public/assets/img/hjz.png";

const dataSelect1 = [{key: 0 , value: "كانون الثاني" } , {key: 1 , value: "شباط" } , {key: 2 , value: "آذار" }]
const datatable1 = [{name: "مستخدم1" ,number: "20" },{name: "مستخدم2" ,number: "18" },{name: "مستخدم3" ,number: "15" },{name: "مستخدم4 " ,number: "10" },{name: "مستخدم5" ,number: "10" }]
const datatable2 = [{name: "مستخدم1" ,number: "500" },{name: "مستخدم2" ,number: "420" },{name: "مستخدم3" ,number: "325" },{name: "مستخدم4" ,number: "300" },{name: "مستخدم5" ,number: "212" }]
const datacard1 = {number:"205K", unit:"زائز", title:"عدد الزبائن الكلي"} ;
const datacard2 = {number:"78K", unit:"مستختدم", title:"عدد المستخدمين الكلي"} ; 
const datacard3 = {number:"3K", unit:"زائر", title:" عدد المستخدمين الجدد "} ; 
const datacard4 = {number:"23K", unit:"متخدم نشط", title:"المستخدمون النشطون"} ; 

const ShowDashboard = () => {
  return (
    <div className='sidFlex'>
      <SideBar/>
      <DashboardTemplate
      dropdown1title = "خلال شهر"
      dropdown1data = {dataSelect1}
      smallTable1title = "المستخدم صاحب أكبر عدد حجوزات" 
      smallTable1icon = {iconhjz}
      smallTable1data = {datatable1}
      smallTable2title =  " المستخدم الذي دفع أكبر مبلغ" 
      smallTable2icon = {iconmony} 
      smallTable2data = {datatable2}
      countCard1data = {datacard1}
      countCard2data = {datacard2}
      countCard3data = {datacard3}
      countCard4data = {datacard4}
     
      chartTitle = "عدد المستخدمين نسبة للبلدان"
      />
      </div>
  )
}

export default ShowDashboard