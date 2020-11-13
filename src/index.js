import Converter from './modules/Converter/index.js';
import Loader from './modules/Loader/index.js'
import Writer from './modules/Writer/index.js';
import { data } from '../data.js';

(async function () {
    const rows = await Loader.do();
    const converted = rows.map(row => {
        const iqual = data.find(x => {
            const rowModel = row.model || '';
            const xModel = x.model || '';

            return xModel.toUpperCase() === rowModel.toUpperCase();
        });

        return {
            ...iqual,
            rent: row.location,
            model: row.model.toUpperCase(),
            category: row.category.replace(/[a-zA-Z0-9] - /, '')
        }
    });
    // const converted = await Converter.do(rows);
    await Writer.do(converted);
})();