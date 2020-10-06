import { FETCH_CURRENT_USER } from '../actions';

export default function(state=null,action){
    console.log('object action',action.payload)
    switch(action.type){
        case FETCH_CURRENT_USER:
            return action.payload.data || false;

         default:
             return state;   
    }
}