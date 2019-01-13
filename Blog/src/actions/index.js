import _ from 'lodash';
import jsopnPlaceHolder from '../apis/jsonplaceholder'

export const fetchPost = () => async dispatch => {
    const response = await jsopnPlaceHolder.get('/posts')

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
};


// Using memoize action would be called one time and thats goiod for our application but if the post was updated we would not see the cnahges, We would have to cretae seperate functions to see that so memoize is not a good solution for this application
export const fetchUser = (id) => dispatch => {
    _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsopnPlaceHolder.get(`/users/${id}`)

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
})