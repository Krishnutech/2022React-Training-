

const initialState = {
    count: 0,
    blogs: [],
    loading: false,
    error: ''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {


        case 'FETCH_START':
            return {...state,
                loading: true
            }
        case 'FETCH_SUCCESS':
            const blogs = [...state.blogs,
                ...action.payload
            ]
            return {...state,
                blogs: blogs,
                loading: false
            }

        case 'FETCH_ERROR':
            return {...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}
export default reducer;