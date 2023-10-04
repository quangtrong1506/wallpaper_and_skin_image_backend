import { responseErrors, responseSuccess } from '../../Common/helper.js';
import BaseController from './BaseController.js';

class UserController extends BaseController {
    base(req, res) {
        try {
            return responseSuccess(res, null);
        } catch (error) {
            return responseErrors(res, 400, e.message);
        }
    }
}

export default UserController;
