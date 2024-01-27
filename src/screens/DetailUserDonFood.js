/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext} from 'react';
import { useParams} from 'react-router-dom';
import { AuthContext } from "../context/auth-context";
import { useHttpClient } from "../hooks/http-hook";
import DisplayDetailUserDonFood from '../components/DisplayDetailUserDonFood';

const DetailUserDonFood = () => {

    const auth = useContext(AuthContext);
    const foodId = useParams().foodId;
    const { sendRequest } = useHttpClient();
    const [loadedFood, setLoadedFood] = useState();

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const responseData = await sendRequest(
                    process.env.NODE_BASE_API_URL + 'users/openviewdonatefood',
                    'POST',
                    JSON.stringify({
                        foodId
                    }),
                    {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + auth.token
                    }
                );
                setLoadedFood(responseData);
            } catch (err) { }
        };
        fetchFoods();
    }, [sendRequest]);

    return (
        <React.Fragment>
            {loadedFood && <DisplayDetailUserDonFood items={loadedFood} />}
        </React.Fragment>
    );
};

export default DetailUserDonFood;
