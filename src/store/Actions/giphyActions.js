import * as actionTypes from './actionTypes';
import axios from 'axios';

export const loadMore = () => {
    return (dispatch, getState) => {
        const state = getState().giphyReducer

        if (state.error || state.isLoading || !state.hasMore) return
        dispatch({ type: 'LOAD_MORE' })
        dispatch(fetchGiphyData())
    }
}

export const updateSearchTerm = (value) => {
    return {
        type: actionTypes['UPDATE_SEARCH_TERM'],
        searchTerm: value
    }
}

//to fetch the gifs
export const fetchGiphyData = () => {
    return (dispatch, getState) => {
        const state = getState().giphyReducer
        const offset = state.hasMore && state.searchTerm === state.prevSearchTerm ? 
        state.offset + state.itemsPerPage : 
        0
                        
        if(state.searchTerm) {
            dispatch({ type: 'FETCH_GIPHY_DATA', error: false })

            const url = `https://api.giphy.com/v1/gifs/search?api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&q=${state.searchTerm}&offset=${offset}`

            axios.get(url)
            .then(response => {
                dispatch(fetchGiphyDataSuccess(response.data))
            })
            .catch(() => dispatch(fetchGiphyDataFail()))
        }
    }
}

export const fetchGiphyDataFail = () => {
    return {
        type: actionTypes['FETCH_GIPHY_DATA_FAIL'],
        error: true
    };
}

export const fetchGiphyDataSuccess = (data) => {
    return {
        type: actionTypes['FETCH_GIPHY_DATA_SUCCESS'],
        data: data.data,
        offset: data.pagination.offset,
        hasMore: data.pagination.total_count - data.pagination.count > 0 
    };
}

export const addToFavorites = (props) => {
    return {
        type: actionTypes['ADD_TO_FAVORITES'],
        item: props
    }
}

export const removeFromFavorites = (props) => {
    return {
        type: actionTypes['REMOVE_FROM_FAVORITES'],
        item: props
    }
};