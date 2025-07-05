import { NodePlopAPI } from "plop";

export default function (plop: NodePlopAPI) {
  const basePath = "src";

  const types = [
    { name: "entity", path: "domain/entities", suffix: "entity" },
    {
      name: "value-object",
      path: "domain/value-objects",
      suffix: "value-object",
    },
    { name: "repository", path: "domain/repositories", suffix: "repository" },
    { name: "interface", path: "interfaces", suffix: "interface" },
    { name: "service", path: "application/services", suffix: "service" },
    { name: "command", path: "application/commands", suffix: "command" },
    { name: "query", path: "application/queries", suffix: "query" },
    { name: "handler", path: "application/handlers", suffix: "handler" },
    {
      name: "controller",
      path: "infrastructure/controllers",
      suffix: "controller",
    },
    { name: "schema", path: "interfaces/schemas", suffix: "schema" },
  ];
  const cliName = getArgValue("--name");

  types.forEach(({ name, path, suffix }) => {
    plop.setGenerator(name, {
      description: `Generate a ${name}`,
      prompts: cliName
        ? []
        : [
            {
              type: "input",
              name: "name",
              message: `نام ${name} رو وارد کن (مثلاً user):`,
            },
          ],
      actions: [
        {
          type: "add",
          path: `${basePath}/${path}/{{kebabCase name}}.${suffix}.ts`,
          templateFile: `plop-templates/${name}.hbs`,
          data: {
            name: cliName,
          },
        },
      ],
    });
  });
}

function getArgValue(flag: string): string | undefined {
  const index = process.argv.indexOf(flag);
  return index !== -1 ? process.argv[index + 1] : undefined;
}
