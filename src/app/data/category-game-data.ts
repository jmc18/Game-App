import { CategoryGame } from "../models/category-game";

export class CategoryGameData {
    constructor() {    
    }

    categoryGameList = [
        new CategoryGame('populares', 'Mas Populares'),
        new CategoryGame('descargados', 'Mas Descargados'),
        new CategoryGame('procimamente', 'Próximamente'),
    ];
}
