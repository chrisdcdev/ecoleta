import knex from '../database/connection';
import {Request, Response} from 'express';

class itemsController{

    async index(request: Request, response: Response) {

        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item =>{
            return{
                id:item.id,
                title:item.title,
                image_url: `http://localhost:3333/uploads/${item.image_url}`,
            }
        })
    
        return response.json({
            items
        });
    
    }
}

export default itemsController;