import { Container, Card, Button } from "react-bootstrap"
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom"

function DoctorCalendar() {
    const {id} = useParams;
    const [calendar, setCalendar] = useState(null);

    const doctorCalendar = () => {
        axios
            .get(`http://localhost:8084/TimeWork/getAllByIdDoctor/1`)
            .then((res) => {
                setCalendar(res.data)
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        doctorCalendar();
    }, []);

    return (
        <Container>
            <div className="mt-5 text-center">
                <h2>Lịch khám hôm nay</h2>
            </div>
            <Container className="mt-5 w-75 h-25">
                {/* {calendar?.map((cal) => ( */}
                    <Card key={calendar.id}>
                        <Card.Header as="h5">{calendar.time}</Card.Header>
                        <Card.Body>
                            <Card.Title>Khách hàng:</Card.Title>
                            <Card.Text>
                                Giờ khám: 
                            </Card.Text>
                            <Card.Text>
                                Triệu chứng:
                            </Card.Text>
                            <Button>
                                <Link to={'/user-health'}>
                                    Xem hồ sơ bệnh án
                                </Link>
                            </Button>
                        </Card.Body>
                    </Card>
                {/* ))} */}
            </Container>
        </Container>
    )
}

export default DoctorCalendar;