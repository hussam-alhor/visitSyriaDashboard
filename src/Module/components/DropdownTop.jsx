import Dropdown from 'react-bootstrap/Dropdown';
import './DropdownTop.css'
import iconDropdown from "./../../../public/assets/img/dropdown.svg";

function DropdownTop({title , dataSelect}) {
  return (
    <div className='DropdownTop'>
    <Dropdown >
      <Dropdown.Toggle id="dropdown-basic">
        {title}
        <img src={iconDropdown} alt="iconDropdown" />
      </Dropdown.Toggle>
      <Dropdown.Menu >
      {dataSelect.map((element, index)=> (
      <div key={index}>
        <Dropdown.Item>{element.value}</Dropdown.Item>
        </div>
        ))}
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
}

export default DropdownTop;