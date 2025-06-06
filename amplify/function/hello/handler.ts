import { Schema } from "../../data/resource";
type HandlerType = Schema["sayHello"]["functionHandler"];

export const handler: HandlerType = async (event, context: any) => {
    const { name } = event.arguments;
    return `Hello, ${name} Dragon!`;
};
