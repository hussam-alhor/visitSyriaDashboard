import React, { useState } from 'react';
import { Table, Pagination, InputGroup, FormControl, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import right from '/assets/img/chevron-right.png';
import left from '/assets/img/chevron-left.png';
import pen from '/assets/img/pen.svg';
import deleteimg from '/assets/img/delete.svg';

const AboutSyriaTable = ({ head1, head2, head3, head4, head5, head6, head7, head8, butnAdd, data, det1, det2, det3, det4, det5, det6, editRow, deleteRow, urlAdd, urlEdit }) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <>
      <div className="main-content w-75 mt-5">
        <div className="actions d-flex justify-content-between align-items-center mb-3">
          <div className="action">
            <Link to={urlAdd} className="custom-add-button" variant="success">
              {butnAdd}
            </Link>
            <InputGroup className="search-bar">
              <FormControl
                placeholder="بحث عن مقال..."
                aria-label="بحث عن مقال"
                className="custom-search-input"
              />
            </InputGroup>
          </div>
          <div className="action2">
            <Form.Select className="sort-select" aria-label="ترتيب حسب التصنيف">
              <option value="">ترتيب حسب</option>
              {det2.map((i, index) => <option key={index} value="">{i}</option>)}
            </Form.Select>
          </div>
        </div>

        <Table striped bordered hover responsive className="custom-table">
          <thead>
            <tr>
              <th>{head1}</th>
              <th>{head2}</th>
              <th>{head3}</th>
              {head4 && <th>{head4}</th>}
              {head5 && <th>{head5}</th>}
              {head8 && <th>{head8}</th>}
              {head6 && <th>{head6}</th>}
              <th>{head7}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((_, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{det1[index]}</td>
                <td>{det2[index]}</td>
                {head4 && <td>{det3}</td>}
                {head5 && <td>{det4}</td>}
                {head8 && <td>{det6}</td>}
                <td>
                  <img src={pen} alt="" onClick={() => editRow(det5[index])} />
                </td>
                <td>
                  <img src={deleteimg} alt="" onClick={() => deleteRow(det5[index])} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Pagination className="d-flex justify-content-center mt-3 custom-pagination">
          <Pagination.Prev onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
            <img src={right} alt="" />
            السابق
          </Pagination.Prev>
          {[...Array(totalPages).keys()].map((number) => (
            <Pagination.Item
              key={number + 1}
              active={number + 1 === page}
              onClick={() => handlePageChange(number + 1)}
            >
              {number + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
            التالي
            <img src={left} alt="" />
          </Pagination.Next>
        </Pagination>
      </div>
    </>
  );
};

export default AboutSyriaTable;
