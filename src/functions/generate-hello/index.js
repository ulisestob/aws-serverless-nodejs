import { Chance } from 'chance';

import { successResponse, errorResponse } from '../../shared/utils/reponses.util.js'

const chance = new Chance()

export const handler = async (event) => {
    try {
        return successResponse({
            message: 'generate: hello',
            email: chance.email(),
        })
    } catch (err) {
        console.log(err);
        return errorResponse({
            message: err instanceof Error ? err.message : 'some error happened'
        })
    }
};
