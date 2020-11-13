
import fs from 'fs';
import path from 'path';
import { FILE_DIST_NAME } from '../common/consts.js';

export const Writer = {

    createBuffer(rows) {
        return Buffer.from(JSON.stringify(rows));
    },

    async createResource(rows) {
        try {
            const buffer = this.createBuffer(rows);
            await fs.writeFileSync(path.join(path.resolve(), FILE_DIST_NAME), buffer);
        } catch (error) {
            console.log(error);
        }
    },

    async do(rows) {
        await this.createResource(rows);
    },

}

export default Writer;  