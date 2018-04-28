const assert = require('assert');
const { ERRORS, wrapError } = require('../../../server/api/api-shared');


describe('api/api-shared', () => {
    describe('ERRORS{}', () => {
        it('should be an Object', () => {
            assert.equal(typeof ERRORS, 'object');
        });

        Object.keys(ERRORS).forEach((hlk) => {
            describe(`ERRORS.${hlk}`, () => {
                const highLevelObj = ERRORS[hlk];
                it(`should be an Object`, () => {
                    assert.equal(typeof highLevelObj, 'object');
                });

                Object.keys(highLevelObj).forEach((llk) => {
                    describe(`ERRORS.${hlk}.${llk}`, () => {
                        const lowLevelObj = highLevelObj[llk];
                        it(`should be an Object`, () => {
                            assert.equal(typeof lowLevelObj, 'object');
                        });
                        it(`should correspond \`{ status, message }\` schema`, () => {
                            assert.equal(typeof lowLevelObj.status, 'number');
                            assert.equal(typeof lowLevelObj.message, 'string');
                        });
                    });
                });
            });
        })
    });


    describe('wrapError()', () => {
        it('should be a Function', function () {
            assert.equal(typeof wrapError, 'function');
        });

        it('should decorate standard type with debug info', () => {
            assert.deepEqual(
                wrapError(ERRORS.Server.General, { debug: 1 }),
                {
                    status: ERRORS.Server.General.status,
                    message: ERRORS.Server.General.message,
                    debug: 1,
                });
        });

        it('should overwrite standard message with given one', () => {
            const message = 'my msg';
            assert.deepEqual(
                wrapError(ERRORS.Server.General, { debug: 1, message }),
                {
                    status: ERRORS.Server.General.status,
                    message,
                    debug: 1,
                });
        });
    });
});
