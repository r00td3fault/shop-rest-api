import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
    PORT: Joi.number().required().default(3000),
    DB_PASSWORD: Joi.string().required(),
    DB_NAME: Joi.string().required(),
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().required(),
    DB_USERNAME: Joi.string().required(),
    DB_SYNCHRONIZE: Joi.string().required(),
    HOST_API: Joi.string().required(),
    JWT_SECRET: Joi.string().required(),
})