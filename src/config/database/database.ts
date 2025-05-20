import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import { User } from "../../models/User"; 

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
    dialect: 'postgres',
    models: [User],
    logging: false,
});

export default sequelize;