import Table from 'react-bootstrap/Table';
import './SmallTable.css'

function SmallTable({title , icon , datatable}) {

  return (
    <div className='SmallTable'>
    <Table   border="1">
      <thead>
        <tr>
          <th>{title}</th>
          <th> </th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
      {datatable.map((element, index)=> (    
        <tr key={index}>
          <td>{element.name}</td>
          <td>{element.number}</td>
          <td> <img src={icon} alt="icon" /></td>
        </tr>
        ))}        
      </tbody>
    </Table>
    </div>
  );
}

export default SmallTable;