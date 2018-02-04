import {FETCH_POSTS, FETCH_POST, FETCH_SUCCESS} from "../actions/posts";

const initialState = {
    postActionType: 'FETCH_POSTS',
    postPayload: [],
    loading: false,
};

export default (state=initialState, action) => {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                postActionType: action.type,
                postPayload: action.postPayload,
                loading: action.loading,
            };
        case FETCH_POST:
            return {
                ...state,
                postActionType: action.type,
                postPayload: action.postPayload,
                loading: action.loading,
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                postPayload: action.postPayload,
                loading: action.loading,
            };
        default:
            return initialState;
    }
}

