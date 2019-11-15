import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    data: [],
    favorites: [],
    prevSearchTerm: '',
    searchTerm: '',
    error: false,
    isLoading: false,
    hasMore: false,
    itemsPerPage: 25
}

const loadMore = (state,action) => {
    return {...state, ...action}
}

const updateSearchTerm = (state, action) => {
    return {...state, ...action}
}

const fetchGiphyData = (state, action) => {
    return {...state, ...action, ...{ isLoading: true }}
}

const fetchGiphyDataSuccess = (state, action) => {
    const newData = state.prevSearchTerm === state.searchTerm ? 
                    [...state.data, ...action.data] : 
                    [...action.data] 
    
    return {
        ...state, 
        type: action.type, 
        data: newData, 
        prevSearchTerm: state.searchTerm,
        offset: action.offset,
        hasMore: action.hasMore,
        ...{ searched: true, isLoading: false }
    }
}

const fetchGiphyDataFail = (state, action) => {
    return {...state, ...action, ...{ searched: true, isLoading: false }}
}

const addToFavorites = (state, action) => {
    return {
        ...state, 
        type: action.type,
        favorites: [...state.favorites, action.item] 
    }
}

const removeFromFavorites = (state, action) => {
    return {
        ...state, 
        type: action.type,
        favorites: state.favorites.filter(item => item.id !== action.item.id)
    }
}

const createReducer = () => {
    return function reducer (state = initialState, action) {
        switch ( action.type ) {
            case actionTypes['LOAD_MORE']: return loadMore( state, action )
            case actionTypes['UPDATE_SEARCH_TERM']: return updateSearchTerm( state, action )
            case actionTypes['FETCH_GIPHY_DATA']: return fetchGiphyData( state, action )
            case actionTypes['FETCH_GIPHY_DATA_SUCCESS']: return fetchGiphyDataSuccess( state, action )
            case actionTypes['FETCH_GIPHY_DATA_FAIL']: return fetchGiphyDataFail( state, action )
            case actionTypes['ADD_TO_FAVORITES']: return addToFavorites( state, action )
            case actionTypes['REMOVE_FROM_FAVORITES']: return removeFromFavorites( state, action )
            default: return state
        }
    }
}

export default createReducer;