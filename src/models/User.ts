import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    CreatedAt,
    UpdatedAt,
    Default,
    Unique,
    AllowNull,
    BeforeCreate
} from "sequelize-typescript";

import bcrypt from 'bcrypt';

// defaultScope esconde algum campo em consultas basicas
@Table({ 
    tableName: 'users',
    defaultScope: {
        attributes : {exclude: ['passwordHash']}
    }
 })
export class User extends Model<User> {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id!: string

    @Unique
    @AllowNull(false)
    @Column(DataType.STRING)
    username!: string

    @AllowNull(false)
    @Column(DataType.STRING)
    name!: string

    @Unique
    @AllowNull(false)
    @Column({
        type: DataType.STRING,
        validate: {
            isEmail: true,
        }
    })
    email!:string

    @AllowNull(false)
    @Column(DataType.STRING)
    passwordHash!: string

    @CreatedAt
    @Column({ field: 'created_at' })
    createdAt!: Date;

    @UpdatedAt
    @Column({ field: 'updated_at' })
    updatedAt!: Date;

    // Aqui vem o hook que hasheia a senha
    @BeforeCreate
    static async hashPassword(instance: User) {
        if(instance.passwordHash) {
            const saltRounds = 10;
            instance.passwordHash = await bcrypt.hash(instance.passwordHash, saltRounds);
        }
    }
}

export default User;