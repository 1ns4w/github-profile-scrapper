import Dexie from 'dexie';

export const db = new Dexie('GitHub');

db.version(1).stores({
	person: '++id, name, username, avatarURL'
});