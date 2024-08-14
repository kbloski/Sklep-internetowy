import { Photo } from "../models/PhotoModel.js";

export class PhotoController {
    async getAll(){
        return await Photo.findAll({});
    };

    async getById(id){
        return await Photo.findByPk(id)
    };

    async updateById(id, photoData){
        await Photo.update(photoData, {
            where: {
                id: id
            }
        })
    };

    async deleteById(id){
        await Photo.destroy({where: {id: id}})
    }
}