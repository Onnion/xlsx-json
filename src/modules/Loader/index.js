import schema from './schema.js';
import readXlsxFile from 'read-excel-file/node.js';
import path from 'path';
import { FILE_DATA_NAME } from '../common/consts.js';

export const Loader = {

    bind(row) {
        const convert = (prev, [key, value]) => {
            return { ...prev, [key]: row[value] };
        };

        return Object.entries(schema).reduce(convert, {});
    },

    async do() {
        const data_path = path.join(path.resolve(), FILE_DATA_NAME);
        const rows = await readXlsxFile(data_path);
        const object_rows = rows.slice(3).reduce((prev, cur) => ([...prev, this.bind(cur)]), []);

        return object_rows;
    }

}

export default Loader;