import axios from 'axios'
import { LOADING_PATIENTS } from './typeActions'

export const patientLoading = () => {
    return{
        type: LOADING_PATIENTS
    }
}

// export const getItems = () => dispatch => {
//     dispatch(productLoading())
//     axios.get('http://localhost:5000/api/processors')
//     .then(res => dispatch({
//         type: GET_PRODUCT,
//         payload: res.data
//     }))
// }

// export const getItemsId = (id) => dispatch => {
//     dispatch(productLoading())
//     axios.get('http://localhost:5000/api/processors/'+ id)
//     .then(res => dispatch({
//         type: GET_SPECS,
//         payload: res.data
//     }))
// }

// export const getCart = () => dispatch => {
//     dispatch(productLoading())
//     axios.get('http://localhost:5000/api/cart')
//     .then(res => dispatch({
//         type: GET_CART,
//         payload: res.data
//     }))
// }

// export const postToCart = (brand, name, price) => dispatch => {
//     axios.post('http://localhost:5000/api/cart', {brand, name, price})
//     .then(() => dispatch({
//         type: POST_CART,
//         payload: {
//             brand: brand,
//             name: name,
//             price: price
//         }
//     }))
// }