import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useHttpClient } from '../hooks/http-hook';
import { AuthContext } from '../context/auth-context';
import Header from '../components/Header';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const ViewFood = props => {

    const auth = useContext(AuthContext);
    const { sendRequest } = useHttpClient();
    const recId = useParams().userId;
    const foodId = useParams().foodId;
    const history = useHistory();
    
    function checkId() {
        if (auth.userId !== recId) return false;
        return true;
    }

    const deletefood = async (e) => {
        e.preventDefault();
        try {
            const responseData = await sendRequest(
                process.env.NODE_BASE_API_URL + 'users/deletefood',
                'POST',
                JSON.stringify({
                    foodId
                }),
                {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth.token
                }
            );
            if(responseData){
                history.push('/reqforfood');
            }
        }
        catch (err) {
        }
    };

    return (
        <div>
            <Header />
            <div className="container card mt-5">
                <div className="row my-2">
                    <div className="col-lg-4 order-lg-1 text-center mt-4">
                        <div className="container mt-3">
                            <img src={props.items.Url} className="mx-auto img-fluid img-circle d-block" alt="avatar" />
                        </div>
                        <h3 className="mt-2">{props.items.name}</h3>
                        
                    </div>
                    <div className="col-lg-8 order-lg-2 mt-3">
                        <div className="tab-content py-4">
                            <div className="tab-pane active" id="viewprofile">
                                <div className="row">
                                    <div className="col-md-12">
                                        <p><strong>Food Name : </strong>{props.items.name}</p>
                                        <p><strong>Function Name : </strong>{props.items.funcname}</p>
                                        <p><strong>Food Type : </strong>{props.items.foodtype}</p>
                                        <p><strong>Food Description : </strong>{props.items.description}</p>
                                        <p><strong>Donator Contact No : </strong>{props.items.mobile}</p>
                                        <p><strong>Food Quality : </strong>{props.items.quality}, <strong>Food Quantity : </strong>{props.items.quantity}</p>
                                        <p><strong>Food Cooked Time : </strong>
                                            <Moment format=" DD/MM  hh:mm A">
                                                {props.items.cookedtime}
                                            </Moment>, <strong>Food Expiry Time : </strong>
                                            <Moment format=" DD/MM  hh:mm A">
                                                {props.items.expirytime}
                                            </Moment></p>
                                        <p><strong>Food Address : </strong>{props.items.address}, {props.items.city}, {props.items.state}</p>
                                        <Link href="/reqforfood">{checkId() && <button type="submit" className="btn btn-danger align-self-center mt-2" onClick={deletefood}>Delete Food</button>}</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="editprofile">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewFood;