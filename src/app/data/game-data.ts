import { v4 as uuid4 } from "uuid";
import { Game } from "../models/game";
import { categoryGameList } from "./category-game-data"; '../data/category-game-data'

class GameData {

    

static randomDate(): Date {
    const startTime = new Date(2012, 0, 1).getDate();
    const endTime = new Date().getDate();
    return new Date(startTime + Math.random() * (endTime - startTime));
}
}

export let gameList = [
    new Game(uuid4(), categoryGameList[0], 'Super Mario', GameData.randomDate(), 'https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 100) + 1, false),
    new Game(uuid4(), categoryGameList[0], 'Super Mario', GameData.randomDate(), 'https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 100) + 1, false),
    new Game(uuid4(), categoryGameList[0], 'Super Mario', GameData.randomDate(), 'https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 100) + 1, false),
    new Game(uuid4(), categoryGameList[0], 'Super Mario', GameData.randomDate(), 'https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 100) + 1, false),
    new Game(uuid4(), categoryGameList[0], 'Super Mario', GameData.randomDate(), 'https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 100) + 1, false),
    new Game(uuid4(), categoryGameList[0], 'Super Mario', GameData.randomDate(), 'https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 100) + 1, false),
    new Game(uuid4(), categoryGameList[0], 'Super Mario', GameData.randomDate(), 'https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 100) + 1, false),
    new Game(uuid4(), categoryGameList[0], 'Super Mario', GameData.randomDate(), 'https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 100) + 1, false),
    
    new Game(uuid4(), categoryGameList[1], 'Super Mario', GameData.randomDate(), 'https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 500) + 1, false),
    new Game(uuid4(), categoryGameList[1], 'Super Mario', GameData.randomDate(), 'https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 500) + 1, false),
    new Game(uuid4(), categoryGameList[1], 'Super Mario', GameData.randomDate(), 'https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 100) + 1, false),
    new Game(uuid4(), categoryGameList[1], 'Super Mario', GameData.randomDate(), 'https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 100) + 1, false),
    new Game(uuid4(), categoryGameList[1], 'Super Mario', GameData.randomDate(), 'https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 100) + 1, false),
    new Game(uuid4(), categoryGameList[1], 'Super Mario', GameData.randomDate(), 'https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 100) + 1, false),
    new Game(uuid4(), categoryGameList[1], 'Super Mario', GameData.randomDate(), 'https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 100) + 1, false),
    new Game(uuid4(), categoryGameList[1], 'Super Mario', GameData.randomDate(), 'https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 100) + 1, false),
    
    new Game(uuid4(), categoryGameList[2], 'Super Mario', GameData.randomDate(), 'https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 5) + 1, true),
    new Game(uuid4(), categoryGameList[2], 'Super Mario', GameData.randomDate(), 'https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 5) + 1, true),
    new Game(uuid4(), categoryGameList[2], 'Super Mario', GameData.randomDate(), 'https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 5) + 1, true),
    new Game(uuid4(), categoryGameList[2], 'Super Mario', GameData.randomDate(), 'https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 5) + 1, true),
    new Game(uuid4(), categoryGameList[2], 'Super Mario', GameData.randomDate(), 'https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 5) + 1, true),
    new Game(uuid4(), categoryGameList[2], 'Super Mario', GameData.randomDate(), 'https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 5) + 1, true),
    new Game(uuid4(), categoryGameList[2], 'Super Mario', GameData.randomDate(), 'https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 5) + 1, true),
    new Game(uuid4(), categoryGameList[2], 'Super Mario', GameData.randomDate(), 'https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 5) + 1, true),
    
]
