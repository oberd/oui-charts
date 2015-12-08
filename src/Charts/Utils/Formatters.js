
import numeral from 'numeral';

export function number(input) {
    return numeral(input).format('0.000');
}
