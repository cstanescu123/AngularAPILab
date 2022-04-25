export interface Movie {
    ID:         number;
    Title:      string;
    Genre:      string;
    Year:       number;
    Actor:      string;
    Director:   string;
}

export type PostMovie = Omit<Movie, "ID">;