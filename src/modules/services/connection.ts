import Dexie from 'dexie';

export const db = new Dexie('ghps');

db.version(1).stores({
	user: '++id, name, username, avatarURL'
});