import { makeSchema } from 'nexus';
import * as QueryTypes from './Query';
import path from 'path';

const schema = makeSchema({
  types: [QueryTypes],
  outputs: {
    schema: path.join(__dirname, '/generated/schema.graphql'),
    typegen: path.join(__dirname, '/generated/types.ts'),
  }
});

export default schema;
