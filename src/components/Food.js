import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Timer from '../screens/Timer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
require('dotenv').config();

const Food = props => {

    if (props.items.length === 0) {
        return (
            <div>
                <Header />
                <div className="d-flex justify-content-center align-items-center font-weight-bold mt-5">
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src = {process.env.REACT_APP_FOOD} />
                        <Card.Body>
                            <Card.Title>Want to Donate Food?</Card.Title>
                            <Card.Text>
                                YOUR SUPPORT MATTERS CONTRIBUTE TO HELP US PROVIDE ESSENTIAL FOOD SUPPORT TO THOSE IN NEED
                            </Card.Text>
                            <div className="d-flex justify-content-center align-items-center mt-1">
                                <Link to="/donate"><Button variant="danger">Donate Now</Button></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Header />
            <div className="row mt-5 ml-5">
                {props.items.map(food => (
                    <div className="ml-4 col-md-2 mb-4 shadow">
                        <Link to={`food/${food.id}/${food.userId}`}>
                            <div className="container" >
                                <img src={food.Url} alt="Sample" style={{ width: "100%", height: 200 }} />
                            </div>
                        </Link>
                        <div className="text-center">
                            <div className="container">
                                <h5>{food.name}</h5></div>
                            <div style={{ width: "100%", height: 96 }} className="d-flex justify-content-center" ><p>{food.address}</p></div>
                            <h6>
                                <Timer items={food.expirytime}/>
                            </h6>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    );
};

export default Food;
