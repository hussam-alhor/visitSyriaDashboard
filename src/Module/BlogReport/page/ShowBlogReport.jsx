import React from 'react'
import SideBar from '../../SideBar/SideBar'
import ReportTemplate from '../../components/ReportTemplate'
import iconPerson from "./../../../../public/assets/img/person.svg";
import iconStar from "./../../../../public/assets/img/Star.svg";

const dataSelect1 = [{key: 0 , value: "كانون الثاني" } , {key: 1 , value: "شباط" } , {key: 2 , value: "آذار" }]
const dataSelect2 = [{key: 0 , value: "دمشق" } , {key: 1 , value: "حماه" } , {key: 2 , value: "اللاذقية" }]
const datatable1 = [{name: "مقالة1" ,number: "50" },{name: "مقالة2" ,number: "40" },{name: "مقالة3" ,number: "25" },{name: "مقالة4 " ,number: "20" },{name: "مقالة5" ,number: "5" }]
const datatable2 = [{name: "مقالة1" ,number: "4.9" },{name: "مقالة2" ,number: "4.2" },{name: "مقالة3" ,number: "3.25" },{name: "مقالة4" ,number: "3.00" },{name: "مقالة5" ,number: "2.12" }]
const datacard1 = {number:"106", unit:"مقالة", title:"عدد مقالات المدونة"} ;
const datacard2 = {number:"117", unit:"زيارة", title:"عدد زيارات المدونة"} ; 

const ShowBlogReport = () => {
  return (
    <div className='sidFlex'>
      <SideBar/>
      <ReportTemplate
      dropdown1title = "خلال شهر"
      dropdown2title = "محافظة  "
      dropdown1data = {dataSelect1}
      dropdown2data = {dataSelect2}
      smallTable1title = "المقالات الأكثر زيارة" 
      smallTable1icon = {iconPerson}
      smallTable1data = {datatable1}
      smallTable2title =  "المقالات الأعلى تقييماً" 
      smallTable2icon = {iconStar} 
      smallTable2data = {datatable2}
      countCard1data = {datacard1}
      countCard2data = {datacard2}
      chartTitle = "مخطط زيارات المدونة"
      />
      </div>
  )
}

export default ShowBlogReport