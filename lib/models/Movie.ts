import {DatabaseConfig} from "../config/database";


export class Movie extends DatabaseConfig.bookshelf().Model<Movie>{

    get tableName() {
        return "movie";
    }

    public get Id(): number {
        return this.get('id');
    }

    public set Id(value: number) {
        this.set({id: value})
    }

    public get title(): string {
        return this.get('tile');
    }

    public set title(value: string) {
        this.set({title: value});
    }

}

