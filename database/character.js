import Realm from 'realm';

export const CHARACTER_SCHEMA = 'CHARACTER';

const CharacterSchema = {
    name: CHARACTER_SCHEMA,
    properties: {
        _id: 'int',
        name: 'string',
    },
    primaryKey: '_id',
};

let characterRealm = new Realm({
    schema: [CharacterSchema],
    path: 'CharacterDatabase.realm',
});

export const getAllCharacters = () => characterRealm.objects(CHARACTER_SCHEMA);

export const createCharacter = ({ characterName }) => characterRealm.write(() => {
    let id = characterRealm.objects(CHARACTER_SCHEMA).max('_id') + 1 || 1;
    characterRealm.create(CHARACTER_SCHEMA, {
        name: characterName,
        _id: id,
    });
});

export const deleteAllCharacter = () => characterRealm.write(() => {
    characterRealm.delete(getAllCharacters())
});

export default characterRealm;
