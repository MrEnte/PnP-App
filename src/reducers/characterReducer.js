import { SELECTED_CHARACTER_CHANGE } from '../constants';

const initialState = {
    selectedCharacter: undefined,
};
const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_CHARACTER_CHANGE:
            return {
                ...state,
                selectedCharacter: action.payload,
            };
        default:
            return state;
    }
};

export default characterReducer;
