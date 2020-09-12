import schema from './schema.js';
import readXlsxFile from 'read-excel-file/node.js';
import path from 'path';

export const Loader = {

    bind(row) {
        const convert = (prev, [key, value]) => {
            return { ...prev, [key]: row[value] };
        };

        return Object.entries(schema).reduce(convert, {});
    },

    async load() {
        const data_path = path.join(path.resolve(), 'data.xlsx');
        const rows = await readXlsxFile(data_path);
        const object_rows = rows.slice(2).reduce((prev, cur) => ([...prev, this.bind(cur)]), []);

        return object_rows;
    }

}

export default Loader;