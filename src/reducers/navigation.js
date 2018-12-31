import { NAVIGATE } from '../constants/ActionTypes';

const initialState = { index: 0 };

export default function navigation(state = initialState, action) {
    switch (action.type) {
        case NAVIGATE:
            return {
                index: action.index
            };
        default:
            return state;
    }
}
