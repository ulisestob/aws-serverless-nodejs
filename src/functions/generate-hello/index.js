const Chance = require('chance');

const { successResponse, errorResponse } = require('../../shared/utils/reponses.util');

const chance = new Chance()

module.exports.handler = async (event) => {
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
