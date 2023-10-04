import Works from '../Models/Works.js';
import BaseRepository from './BaseRepository.js';

class WorksRepository extends BaseRepository {
    constructor() {
        super(Works);
    }
}

export default new WorksRepository();
