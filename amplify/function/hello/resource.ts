import { defineFunction } from "@aws-amplify/backend";

const MY_REGION = 'us-east-1';
const MY_TABLE_NAME = 'Product';

export const sayHello = defineFunction({
  name: "sayHello",
  entry: "./handler.ts",
  bundling: {
    minify: false,
  },
  environment: {
    MY_REGION,
    MY_TABLE_NAME,
  },
});