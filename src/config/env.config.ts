
export const EnvConfiguration = () => (
    {
        environment: process.env.NODE_ENV || 'dev',
        PORT: process.env.PORT || 3000,
        DB_PASSWORD: process.env.DB_PASSWORD,
        DB_NAME: process.env.DB_NAME,
        DB_HOST: process.env.DB_HOST,
        DB_PORT: process.env.DB_PORT,
        DB_USERNAME: process.env.DB_USERNAME,
        DB_SYNCHRONIZE: process.env.DB_SYNCHRONIZE,
        HOST_API: process.env.HOST_API,
        JWT_SECRET: process.env.JWT_SECRET,
    }
)