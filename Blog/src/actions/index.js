import jsopnPlaceHolder from '../apis/jsonplaceholder'

export const fetchPost = () => async dispatch => {
    const response = await jsopnPlaceHolder.get('/posts')

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
};

export const fetchUser = (id) => async dispatch => {
    const response = await jsopnPlaceHolder.get(`/users/${id}`)

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
}