import _ from 'lodash';

export const Converter = {

    choseDate(enterprise) {
        return enterprise.reduce((prev, cur) => (new Date(prev.date) > new Date(cur.date)) ? prev : cur);
    },

    do(rows) {
        const grouped = _.groupBy(rows, (b) => b.enterprise);
        return _.map(grouped, enterprise => ({ ...this.choseDate(enterprise) }));
    }
}

export default Converter;