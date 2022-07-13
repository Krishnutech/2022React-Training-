const fetchStart = () => {
    return {
        type: 'FETCH_START'
    }
}
const fetchSuccess = (data) => {
    
    return {
        type: 'FETCH_SUCCESS',
        payload: data
    }
}
const fetchError = (error) => {
    return {
        type: 'FETCH_ERROR',
        payload: error
    }
}

 export const fetchBlogs = () => {
        return async (dispatch) => {
            console.log('keerthana')
            dispatch(fetchStart())
            await fetch('https://jsonplaceholder.typicode.com/posts').then(data => {

            data.json().then(blogs =>{
                setTimeout(() => {dispatch(fetchSuccess(blogs))} ,3000)
            })

            }).catch(err => {
                dispatch(fetchError(err))
            })

        }
    }