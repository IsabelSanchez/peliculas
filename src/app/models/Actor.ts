import { Movie } from "./Movie";

export class Actor {
    constructor(
        public adult: boolean,
        public gender: number,
        public id: number,
        public known_for: Movie[],
        public known_for_department: string,
        public name: string,
        public popularity: number,
        public profile_path: string
    ) {
    }
}