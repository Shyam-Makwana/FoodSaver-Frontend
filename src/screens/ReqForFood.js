/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHttpClient } from "../hooks/http-hook";
import Food from '../components/Food';

const ReqForFood = () => {

    const { sendRequest } = useHttpClient();
    const [loadedFood, setLoadedFood] = useState();

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const responseData = await sendRequest(
                    process.env.NODE_BASE_API_URL + 'users/request',
                );
                setLoadedFood(responseData.foods);
            } catch (err) { }
        };
        fetchFoods();
    }, [sendRequest]);

    return (
        <React.Fragment>
            {loadedFood && <Food items={loadedFood} />}
        </React.Fragment>
    );
};

export default ReqForFood;