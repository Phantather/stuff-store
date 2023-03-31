import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useGetProductQuery} from "../../../features/apiSlice/apiSLice";
import {ROUTES} from "../../../utils/routes";
import Product from "../Product/Product";


const SingleProduct = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {data, isLoading, isFetching, isSuccess} = useGetProductQuery({id})

    useEffect(() => {
        if (!isFetching && !isLoading && !isSuccess) {
            navigate(ROUTES.HOME);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, isFetching, isSuccess]);
    return !data ? (
        <section className="preloader">Loading...</section>
    ) : (
        <>
            <Product {...data} />
        </>
    );
};

export default SingleProduct;