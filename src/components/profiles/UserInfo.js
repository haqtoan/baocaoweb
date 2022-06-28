import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function UserInfo() {
    const [user, setUser] = useState([]);

    const userHealth = () => {
        axios
        .get(`http://localhost:8084/User/getUserById/1`)
        .then((res) => {
            setUser(res.data.data);
            console.log(res.data);
        })
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        userHealth();
    }, []);

    return (
        <Container>
            <div className="flex-row">
                <Link to={"/"}>Trang chủ</Link> / Thông tin cá nhân
            </div>
            <div className="text-center">
                <h2>THÔNG TIN CÁ NHÂN</h2>
            </div>
            <div className="align-items-center d-flex justify-content-center">
                <div className="col-md-8 ">
                    <div className="row mt-3 ">
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Tên đăng nhập</Form.Label>
                            <Form.Control type="text" value={user.username} readOnly />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Họ tên</Form.Label>
                            <Form.Control type="text" value={user.fullName} readOnly />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control type="text" value={user.username} readOnly />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" value={user.email} readOnly />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Ngày sinh</Form.Label>
                            <Form.Control type="text" value={user.birth} readOnly />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Giới tính</Form.Label>
                            <Form.Control 
                            type="text" 
                            value={(user.sex === true)? "Nam" : "Nữ"}
                            readOnly />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control type="text" value={user.address} readOnly />
                        </Form.Group>
                        <div className="mt-5 text-center">
                            <Button type="submit" href="/user/info/edit">Chỉnh sửa</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default UserInfo;