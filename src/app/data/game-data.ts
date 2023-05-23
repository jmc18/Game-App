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
    new Game(uuid4(), categoryGameList[0], 'Minecraft', GameData.randomDate(), 'https://image.api.playstation.com/vulcan/img/cfn/11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I.png', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 100) + 1, false, 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'),
    new Game(uuid4(), categoryGameList[0], 'Fall Guys', GameData.randomDate(), 'https://files.tecnoblog.net/wp-content/uploads/2020/08/fall-guys-review.jpg', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 100) + 1, false, 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500' ),
    new Game(uuid4(), categoryGameList[0], 'Roblox', GameData.randomDate(), 'https://i.blogs.es/9982ac/roblox-1/840_560.jpeg', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 100) + 1, true, 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'),
    new Game(uuid4(), categoryGameList[0], 'League of Legends', GameData.randomDate(), 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/CNTWUAMXZRF3BPIYPCNPFHOMJQ.jpg', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 500) + 1, false, 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'),
    new Game(uuid4(), categoryGameList[0], 'FIFA 23', GameData.randomDate(), 'https://www.lavanguardia.com/files/article_main_microformat/uploads/2022/09/28/633374d106b46.jpeg', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 500) + 1, false, 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'),
    new Game(uuid4(), categoryGameList[0], 'Pokémon Unite', GameData.randomDate(), 'https://visiongeek.pe/wp-content/uploads/Pokemon-Unite-Conoce-el-rol-de-cada-Pokemon-segun-sus-habilidades.jpg', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 100) + 1, false, 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'),
    new Game(uuid4(), categoryGameList[0], 'Free Fire', GameData.randomDate(), 'https://i.blogs.es/3ae938/freefire19/1366_2000.jpeg', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 100) + 1, true, 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'),
    new Game(uuid4(), categoryGameList[0], 'Super Mario Odyssey', GameData.randomDate(), 'https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart', Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 100) + 1, false, 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'),
    
    
]
