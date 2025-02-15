import { Delivery } from "../models/DeliveryModel.js";

export class DeliveryController {
    async getAll(){
        return await Delivery.findAll({})
    };

    async getById(id){
        return await Delivery.findByPk(id)
    };

    async createDelivery (deliveryData, addressDb){
        const deliveryDb = await Delivery.create(deliveryData);
        if (addressDb) deliveryDb.setAddress(addressDb);
        return deliveryDb;
    };

    async setAddress(deliveryDb, addressDb){
        if (!deliveryDb || !addressDb) return;
        await Delivery.update( {address_id: addressDb.id}, {where: {id: deliveryDb.id}});
    };

    async deleteById(id){
        await Delivery.destroy({where: {id: id}})
    }
}