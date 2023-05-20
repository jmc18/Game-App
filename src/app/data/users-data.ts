import { v4 as uuid4 } from "uuid";
import { User } from "../models/user";

export let userDataLis : User[] = [
        new User(uuid4(), 'jisela.herrera.p@gmail.com', 'Jisela Herrera', '1234567890'),
        new User(uuid4(), 'mtzcornejo66@gmail.com', 'Javier Martinez', '1234567890'),
]
