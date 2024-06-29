import { Button } from "react-bootstrap";
import SideBar from "../../SideBar/SideBar";
import AboutSyriaTable from "./AboutSyriaTable";
// import AddArticleRight from '../component/AddAricleAboutRight/AddArticleRight'
// import { Col, Row } from 'react-bootstrap'
// import AddArticleAboutLeft from '../component/AddArticleAboutLeft/AddArticleAboutLeft'
import edit from '/assets/img/PencilSimpleLine.png';
import trash from '/assets/img/Trash.png'
import "./ShowAboutSyriaManagment.css";
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
  return (
    <div className="sidFlex">
      <SideBar />
      {/* <div className="showAboutContent">
      <Row>
          <Col sm='5'>
           <AddArticleRight/>
          </Col>
          <Col sm='5'>
            <AddArticleAboutLeft />
          </Col>
      </Row>
      </div> */}
        <AboutSyriaTable
          apiEndpoint="http://127.0.0.1:8000/api/posts"
          columns={columns}
        />
    </div>
  );
};


export default ShowAboutSyriaManagment;
