import React, {useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {MoviesList, PageLoader, Pagination} from "../../components";

const GenreSinglePage = () => {
    const { id } = useParams();

    const [searchParams, setSearchParams] = useSearchParams();

    const dispatch = useDispatch();
    const {isLoading} = useSelector(state => state.movies)

    const currentPage = searchParams.get('page') || 1;

    useEffect(() => {
        dispatch(moviesActions.betByGenre({id}))
    }, [id, currentPage])

    return (
        <>
            {isLoading && <PageLoader/> }

            {!isLoading && <Pagination currentPage={currentPage}/>}

            <MoviesList />
        </>
    );
};

export {
    GenreSinglePage
};