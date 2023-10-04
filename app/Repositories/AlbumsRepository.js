import Albums from '../Models/Albums.js';
import BaseRepository from './BaseRepository.js';

class AlbumsRepository extends BaseRepository {
    constructor() {
        super(Albums);
    }
}

export default new AlbumsRepository();
