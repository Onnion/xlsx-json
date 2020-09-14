import _ from 'lodash';

export const Converter = {

    do(rows) {
        return _.groupBy(rows, (b) => b.enterprise);
    }
}

export default Converter;  