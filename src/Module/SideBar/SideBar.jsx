import './SideBar.css'
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import down from "./../../../public/assets/img/dropdown.svg";
import home from "./../../../public/assets/img/home.svg";
import syria from "./../../../public/assets/img/syria.svg";
import hotel from "./../../../public/assets/img/hotel.svg";
import restaurant from "./../../../public/assets/img/restaurant.svg";
import landMark from "./../../../public/assets/img/landMark.svg";
import blog from "./../../../public/assets/img/blog.svg";
import setting from "./../../../public/assets/img/setting.svg";


const SideBar = () => {

  return (
    <div className='sideBar'>
      <Navbar expand="lg">
      {/* <Container> */}
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="sideBarDir">
            {/* <img className='sidBarRightIcon' src={home} alt=""></img> */}
            <NavLink to={'/'}>
            <img className='sidBarRightIcon' src={home} alt=""></img> 
            <span>لوحة التحكم</span>
            </NavLink>

            
            
            <NavLink to={'/aboutSyria'}><img className='sidBarRightIcon' src={syria} alt=""></img> <span>عن سوريا</span> </NavLink>
             
            <NavLink to={'/hotels'}>
            <img className='sidBarRightIcon' src={hotel} alt=""></img> 
            <span>الفنادق</span>
            <img className='sideBarDropIcon' src={down}></img>
            </NavLink>
            <NavDropdown className='SidBarDrop' id="basic-nav-dropdown" >
              <NavLink to={'/hotelsManagment'}><span>إدارة الفنادق</span></NavLink>
              <NavLink to={'/hotelsReports'}><span>تقارير الفنادق</span> </NavLink>
            </NavDropdown>


            <NavLink to={'/restaurants'}>
            <img className='sidBarRightIcon' src={restaurant} alt=""></img>
              <span>المطاعم</span>
             <img className='sideBarDropIcon' src={down}></img>
              </NavLink>
            <NavDropdown className='SidBarDrop' id="basic-nav-dropdown" >
              <NavLink to={'/restaurantsManagment'}> <span>إدارة المطعم</span> </NavLink>
              <NavLink to={'/restaurantsReports'}> <span>تقارير المطعم</span> </NavLink>
            </NavDropdown>


            <NavLink to={'/landMarks'}>
            <img className='sidBarRightIcon SideLandIcon' src={landMark} alt=""></img>
            <span>المعالم السياحية</span>
            <img className='sideBarDropIcon landMarkIcon' src={down}></img>
            </NavLink>
            <NavDropdown  className='SidBarDrop sideBarDropLand' id="basic-nav-dropdown" >
              <NavLink to={'/landMarksManagment'}> <span className='sideBarSpanLand'>إدارة المعالم السياحية</span> </NavLink>
              <NavLink to={'/landMarksReports'}> <span className='sideBarSpanLand's>تقارير المعالم السياحية</span> </NavLink>
            </NavDropdown>

            <NavLink to={'/Blogs'}>
            <img className='sidBarRightIcon' src={blog} alt=""></img>
            <span>المدونة</span> 
            <img className='sideBarDropIcon' src={down}></img>
            </NavLink>
            <NavDropdown  className='SidBarDrop' id="basic-nav-dropdown" >
              <NavLink to={'/BlogManagment'}> <span>إدارة المدونة</span> </NavLink>
              <NavLink to={'/BlogReport'}> <span>تقارير المدونة</span> </NavLink>
            </NavDropdown>

            <NavLink to={'/setting'}>
            <img className='sidBarRightIcon' src={setting} alt="setting" ></img>
            <span>الأعدادات</span>
            </NavLink>
          </Nav>
        </Navbar.Collapse>

      {/* </Container> */}
    </Navbar>
    </div>
  )
}

export default SideBar