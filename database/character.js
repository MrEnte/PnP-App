import Realm from 'realm';

export const CHARACTER_SCHEMA = 'CHARACTER';

const CharacterSchema = {
    name: CHARACTER_SCHEMA,
    properties: {
        _id: 'int',
        name: 'string',
        health: 'int',
    },
    primaryKey: '_id',
};

let characterRealm = new Realm({
    schema: [ CharacterSchema ],
    path: 'CharacterDatabase.realm',
    schemaVersion: 2,
});

export const getAllCharacters = () => characterRealm.objects(CHARACTER_SCHEMA);

export const createCharacter = ({ characterName, characterHealth }) => characterRealm.write(() => {
    const id = characterRealm.objects(CHARACTER_SCHEMA).max('_id') + 1 || 1;
    characterRealm.create(CHARACTER_SCHEMA, {
        name: characterName,
        health: characterHealth,
        _id: id,
    });
});

export const deleteAllCharacter = (setCharacters) => characterRealm.write(() => {
    characterRealm.delete(getAllCharacters());
    setCharacters([]);
});

export default characterRealm;
