import React from 'react'
import SideBar from '../../SideBar/SideBar'

const ShowAboutSyriaManagment = () => {
  const columns = [
    {
        header: 'حذف',
        field: 'delete',
        render: () => <Button variant="danger">
          <img src={trash} alt="" />
        </Button>
    },
    {
        header: 'تعديل',
        field: 'edit',
        render: () => <Button variant="warning">
          <img src={edit} alt="" />
        </Button>
    },
    {
        header: 'الصور',
        field: 'image',
        render: (value) => value ? <img src={value} alt="صورة المقال" width="50" /> : 'تم الرفع'
    },
    {
        header: 'نص المقال',
        field: 'content',
    },
    {
        header: 'التصنيفات',
        field: 'category',
    },
    {
        header: 'عنوان المقال',
        field: 'title',
    },
    {
        header: 'id',
        field: 'id',
    }
];
// const token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzE5NzY1ODgxLCJleHAiOjE3MTk3Njk0ODEsIm5iZiI6MTcxOTc2NTg4MSwianRpIjoiS25mQUZsamlvWXFjeEkzYSIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.eP2T9-5_mn5pH3BDaSpWHURD08_FEpR40a9vIAxYk3k';
const token =   window.localStorage.getItem("token");
  return (
    <div className='sidFlex'>
      <SideBar/>
      ShowAboutSyriaManagment
      </div>
  )
}

export default ShowAboutSyriaManagment;
