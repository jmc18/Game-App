import { CategoryGame } from "./category-game";

export class Game {
    constructor(gameId: string, category: CategoryGame, title: string, releaseDate: Date, imageUr: string, rating: number, downloads: number, isComingSoon: boolean, description:string){
        this.gameId = gameId;
        this.category = category;
        this.title = title;
        this.releaseDate = releaseDate;
        this.imageUrl = imageUr;
        this.rating = rating;
        this.downloads = downloads;
        this.isComingSoon = isComingSoon;
        this.description = description;
    }

    gameId!: string;
    category!: CategoryGame;
    title!: string;
    releaseDate!: Date;
    imageUrl!: string;
    rating!: number;
    downloads!: number;
    isComingSoon!: boolean | false;
    description!:string
}
