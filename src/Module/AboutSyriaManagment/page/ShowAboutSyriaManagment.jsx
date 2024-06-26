import SideBar from '../../SideBar/SideBar'
import  { useEffect, useState } from 'react';
import axios from 'axios';
import './about.css'
import { Table, Button, Pagination, InputGroup, FormControl, Form } from 'react-bootstrap';
import { FaTrash, FaEdit, FaPlus } from 'react-icons/fa';
const ShowAboutSyriaManagment = () => {
  const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [sortCategory, setSortCategory] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/posts?page=${page}&sort=${sortCategory}`)
            .then(response => {
                setPosts(response.data.data); // Assuming the response structure
                setTotalPages(response.data.last_page); // Assuming the response structure
            })
            .catch(error => {
                console.error("There was an error fetching the posts!", error);
            });
    }, [page, sortCategory]);

    const handlePageChange = (pageNumber) => {
        setPage(pageNumber);
    };


  return (
    <div className='sidFlex con'>
      <SideBar/>

      <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <Button variant="success">
                    <FaPlus /> إضافة مقال
                </Button>
                <InputGroup className="search-bar">
                    <FormControl
                        placeholder="بحث عن مقال..."
                        aria-label="بحث عن مقال"
                    />
                </InputGroup>
                <Form.Select
                    className="sort-select"
                    value={sortCategory}
                    onChange={(e) => setSortCategory(e.target.value)}
                    aria-label="ترتيب حسب التصنيف"
                >
                    <option value="">ترتيب حسب</option>
                    <option value="التصنيف">التصنيف</option>
                    {/* يمكن إضافة المزيد من الخيارات هنا */}
                </Form.Select>
            </div>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>حذف</th>
                        <th>تعديل</th>
                        <th>الصور</th>
                        <th>نص المقال</th>
                        <th>التصنيفات</th>
                        <th>عنوان المقال</th>
                        <th>id</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <td>
                                <Button variant="danger">
                                    <FaTrash />
                                </Button>
                            </td>
                            <td>
                                <Button variant="warning">
                                    <FaEdit />
                                </Button>
                            </td>
                            <td>{post.image ? <img src={post.image} alt="صورة المقال" width="50" /> : 'تم الرفع'}</td>
                            <td>{post.content}</td>
                            <td>{post.category}</td>
                            <td>{post.title}</td>
                            <td>{post.id}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Pagination className="d-flex justify-content-center mt-3">
                <Pagination.Prev onClick={() => handlePageChange(page - 1)} disabled={page === 1} />
                {[...Array(totalPages).keys()].map(number => (
                    <Pagination.Item key={number + 1} active={number + 1 === page} onClick={() => handlePageChange(number + 1)}>
                        {number + 1}
                    </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => handlePageChange(page + 1)} disabled={page === totalPages} />
            </Pagination>
        </div>

      </div>
  );
}

export default ShowAboutSyriaManagment