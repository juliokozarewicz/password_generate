const packageJson = require('../package.json');

const documentation = {
  // configs
  openapi: "3.0.0",
  info: {
    title: packageJson.application_name.toUpperCase(),
    version: packageJson.version,
    description: packageJson.description,
  },
  // components, security etc...
  components: {
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    }
  },
  // endpoints
  paths: {
    // HELLO WORLD
    // --------------------------------------------------
    "/helloworld/helloworld": {
      get: {
        summary: "Get hello world message",
        description: "Retrieves a hello world message. You can optionally provide a custom message via query parameter.",
        tags: ["HELLO WORLD"],
        parameters: [
          {
            name: "message",
            in: "query",
            required: false,
            description: "Custom message to be returned. Defaults to 'Hello World!!!' if not provided.",
            schema: {
              type: "string",
              example: "Hello from the API!"
            }
          }
        ],
        responses: {
          "200": {
            description: "Successful response with hello world message.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "string",
                      example: "success"
                    },
                    code: {
                      type: "integer",
                      example: 200
                    },
                    message: {
                      type: "string",
                      example: "Hello World!!!"
                    },
                    links: {
                      type: "object",
                      properties: {
                        self: {
                          type: "string",
                          example: "/helloworld/helloworld"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    // -------------------------------------------------- (end hello world)
    // PASSWORD GENERATOR
    // --------------------------------------------------
    "/password-generator/generate": {
      get: {
        summary: "Generate a secure password",
        description: "Generates a secure password based on a specified length. The password will contain a combination of upper and lower case letters, numbers, and special characters.",
        tags: ["PASSWORD GENERATOR"],
        parameters: [
          {
            name: "length",
            in: "query",
            required: true,
            description: "The length of the generated password. Must be an integer between 32 and 500.",
            schema: {
              type: "integer",
              example: 32
            }
          }
        ],
        responses: {
          "200": {
            description: "Successfully generated password.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "string",
                      example: "success"
                    },
                    code: {
                      type: "integer",
                      example: 200
                    },
                    message: {
                      type: "string",
                      example: "Password generated successfully."
                    },
                    data: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          password: {
                            type: "string",
                            example: "a1b2C3D4!@#$"
                          }
                        }
                      }
                    },
                    meta: {
                      type: "object",
                      properties: {
                        total: {
                          type: "integer",
                          example: 1
                        }
                      }
                    },
                    links: {
                      type: "object",
                      properties: {
                        self: {
                          type: "string",
                          example: "/password-generator/generate"
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            description: "Invalid input, password length out of bounds or non-integer value.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "string",
                      example: "error"
                    },
                    code: {
                      type: "integer",
                      example: 400
                    },
                    message: {
                      type: "string",
                      example: "Password length must be an integer between 32 and 500."
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    // -------------------------------------------------- (end password generator)
  }
};

export default documentation;
