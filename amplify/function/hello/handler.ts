import { Schema } from "../../data/resource";
type HandlerType = Schema["sayHello"]["functionHandler"];
import { env } from "$amplify/env/sayHello";

export const handler: HandlerType = async (event, context: any) => {
    const { MY_REGION, MY_TABLE_NAME } = env;
    const { name } = event.arguments;
    return `Hello, ${name} Dragon! ${MY_REGION} ${MY_TABLE_NAME}`;
};
