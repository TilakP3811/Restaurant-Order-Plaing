import React, { useContext, useEffect } from 'react';
import HomeControler from '../home-controller/HomeControler';
import { useParams } from 'react-router-dom';
import { userContext } from '../../../../Context/context';
import { TABLE } from '../../../../Actions/Actions';

const Home = () => {

    const { number } = useParams();
    const { tableDispatch } = useContext(userContext);
    useEffect(() => {
        tableDispatch({ type: TABLE, payload: ({ table: number }) });
    }, [number])
    return (
        <HomeControler />
    )
}

export default Home;