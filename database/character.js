import Realm from 'realm';

export const CHARACTER_SCHEMA = 'CHARACTER';
export const WEAPON_SCHEMA = 'WEAPON';

const CharacterSchema = {
    name: CHARACTER_SCHEMA,
    properties: {
        _id: 'int',
        name: 'string',
        health: 'int',
        money: 'int',
        weapons: `${WEAPON_SCHEMA}[]`,
    },
    primaryKey: '_id',
};

const WeaponSchema = {
    name: WEAPON_SCHEMA,
    properties: {
        _id: 'int',
        name: 'string',
        damage: 'string',
    },
    primaryKey: '_id',
}

let characterRealm = new Realm({
    schema: [ CharacterSchema, WeaponSchema ],
    path: 'CharacterDatabase.realm',
    schemaVersion: 6,
});

export const getAllCharacters = () => characterRealm.objects(CHARACTER_SCHEMA);

export const createCharacter = ({
    characterName,
    characterHealth,
    characterMoney,
}) => characterRealm.write(() => {
    const id = characterRealm.objects(CHARACTER_SCHEMA).max('_id') + 1 || 1;
    characterRealm.create(CHARACTER_SCHEMA, {
        name: characterName,
        health: characterHealth,
        money: characterMoney,
        _id: id,
    });
});

export const deleteAllCharacter = (setCharacters) => characterRealm.write(() => {
    characterRealm.delete(getAllCharacters());
    setCharacters([]);
});

export default characterRealm;
