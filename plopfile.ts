import { NodePlopAPI, Plop } from "plop";

export default function (plop: NodePlopAPI) {
  plop.setGenerator("hello", {
    description: "Test generator",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "اسم فایل تستی چی باشه؟",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/__generated__/{{kebabCase name}}.ts",
        template: "console.log('Hello {{name}}!');",
      },
    ],
  });
  plop.setGenerator("service", {
    description: "Genearte a service in applicatio/services",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Service name (e.g. UserService):",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/application/services/{{kebabCase name}}.service.ts",
        templateFile: "plop-templates/service.hbs",
      },
    ],
  });
  plop.setGenerator("entity", {
    description: "Generate an Entity in domain/entities",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Entity name (e.g. User):",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/domain/entities/{{kebabCase name}}.entity.ts",
        templateFile: "plop-templates/entity.hbs",
      },
    ],
  });
}
