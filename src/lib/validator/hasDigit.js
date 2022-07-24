import { Types, isInvalidType, isNumber, isString } from './utilities';

const DIGIT_REGEXP = /\d+/;

export default config => value => {
    if (isNumber(value)) {
        return null;
    }

    if (isString(value)) {
        return !DIGIT_REGEXP.test(value) ? config.message : null;
    }

    return isInvalidType(value, [Types.number, Types.string]);
};
