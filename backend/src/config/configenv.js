import dotenv from "dotenv";

dotenv.config();

export const config_ENV=({
    PORT:process.env.PORT  || 3000,
})