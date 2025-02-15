import { sequelize } from '../utility/db.js';
import { DataTypes } from 'sequelize';

const Picture = sequelize.define('Picture',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
            isInt: true
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    url: {
        type: DataTypes.STRING,
        allowNull: false
    }

})

export {
    Picture
} 