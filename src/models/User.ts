import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    Default,
    Unique,
    AllowNull,
    CreatedAt,
    UpdatedAt,
    BeforeCreate
} from "sequelize-typescript";
import { CreationOptional } from 'sequelize';

import bcrypt from 'bcrypt';

export interface CreateUser {
  username: string;
  name: string;
  email: string;
  passwordHash: string;
}

export interface UserAttributes extends CreateUser {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// defaultScope esconde algum campo em consultas basicas
@Table({
    tableName: 'users',
    defaultScope: {
        attributes: { exclude: ['passwordHash'] }
    }
})
/*
Model<UserAttributes, CreateUser> define dois tipos:
UserAttributes → todos os campos que o modelo possui (inclusive id, createdAt etc.)
CreateUser → apenas os campos necessários para criar (sem os automáticos)
Isso permite que o TypeScript entenda o que é obrigatório na criação e o que é gerado pelo Sequelize.
*/
export class User extends Model<UserAttributes, CreateUser> {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    declare id: CreationOptional<string>;

    @Unique
    @AllowNull(false)
    @Column(DataType.STRING)
    declare username: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    declare name: string;

    @Unique
    @AllowNull(false)
    @Column({
        type: DataType.STRING,
        validate: {
            isEmail: true,
        }
    })
    declare email: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    declare passwordHash: string;

    @CreatedAt
    @Column(DataType.DATE)
    declare createdAt: Date;

    @UpdatedAt
    @Column(DataType.DATE)
    declare updatedAt: Date;

    // Aqui vem o hook que hasheia a senha
    @BeforeCreate
    static async hashPassword(instance: User) {
        if (instance.passwordHash) {
            const saltRounds = 10;
            instance.passwordHash = await bcrypt.hash(instance.passwordHash, saltRounds);
        }
    }
}

export default User;