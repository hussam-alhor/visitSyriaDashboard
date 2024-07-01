import { useEffect, useState } from "react";
import axios from "axios";
import right from '/assets/img/chevron-right.png';
import left from '/assets/img/chevron-left.png';
import {
  Table,
  Pagination,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const AboutSyriaTable = ({ apiEndpoint, columns, token }) => {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortCategory, setSortCategory] = useState('');

  useEffect(() => {
    axios.get(`${apiEndpoint}?page=${page}&sort=${sortCategory}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      setData(response.data.data || []);
      console.log(response.data.data);
      setTotalPages(response.data.last_page || 1);
    })
    .catch(error => {
      console.error("There was an error fetching the data!", error);
      setData([]);
      setTotalPages(1);
    });
  }, [page, sortCategory, apiEndpoint, token]);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <>
      <div className="main-content w-75 mt-5">
        <div className="actions d-flex justify-content-between align-items-center mb-3">
          <div className="action">
            <Link to='' className="custom-add-button" variant="success">
              إضافة مقال
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
            <Form.Select
              className="sort-select"
              value={sortCategory}
              onChange={(e) => setSortCategory(e.target.value)}
              aria-label="ترتيب حسب التصنيف"
            >
              <option value="">ترتيب حسب</option>
              <option value="التصنيف">التصنيف</option>
            </Form.Select>
          </div>
        </div>

        <Table striped bordered hover responsive className="custom-table">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                {columns.map((column, index) => (
                  <td key={index}>
                    {column.render
                      ? column.render(item[column.field], item)
                      : item[column.field]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination className="d-flex justify-content-center mt-3 custom-pagination">
          <Pagination.Prev
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
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
          <Pagination.Next
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            التالي
            <img src={left} alt="" />
          </Pagination.Next>
        </Pagination>
      </div>
    </>
  );
}

AboutSyriaTable.propTypes = {
  apiEndpoint: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      field: PropTypes.string.isRequired,
      render: PropTypes.func,
    })
  ).isRequired,
  token: PropTypes.string.isRequired,
};

export default AboutSyriaTable;
