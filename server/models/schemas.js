import { sequelize } from "../utility/db.js";
import { User } from "./UserModel.js";
import { Address } from "./AddressModel.js";


// TODO - add relations model in this place

await sequelize.sync();

export {
    User,
    Address
}

