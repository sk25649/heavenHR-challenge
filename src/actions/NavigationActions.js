import { NAVIGATE } from '../constants/ActionTypes';

export function navigate(index) {
    return {
        type: NAVIGATE,
        index
    }
}
