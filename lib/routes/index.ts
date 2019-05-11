import {Request, Response} from "express";
import {Movie} from "../models/Movie";
import {MovieController} from "../controller/movieController";

export class Routes {

    public movieController: MovieController = new MovieController();

    public routes(app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            });

        app.route('/movie')
        // GET endpoint
            .get((req: Request, res: Response) => {
                // Get all Movies
                this.movieController.addNewMovie(req,res);
            })
            // POST endpoint
            .post((req: Request, res: Response) => {
                // Create new movie

            });

        app.route('/movie/:id')
            .get((req:Request, res: Response) => {
                res.status(200).send({
                    message: 'GET Request Successfull for movie by id'
                })
            })
    }
}
