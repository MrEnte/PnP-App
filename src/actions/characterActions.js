import { SELECTED_CHARACTER_CHANGE } from '../constants';

export function changeSelectedCharacter(selectedCharacter) {
    return {
        type: SELECTED_CHARACTER_CHANGE,
        payload: selectedCharacter,
    };
}
