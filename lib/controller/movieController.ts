import { Request, Response } from 'express';
import {Movie} from "../models/Movie";

export class MovieController {

    public addNewMovie(req: Request, res: Response) {
        let newMovie = new Movie({title:"Sholay"});
        newMovie.save().then(succ => {
            res.status(200).send({
                message:"success", data:succ
            })
        }, err => {
            res.status(200).send( {
                message:"failure", data:err
            })
        })
    }

}
