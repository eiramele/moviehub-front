export default interface Movie {
  id: number;
  film_name: string;
  image: string;
  release_year: number;
  createAt: Date;
  updateAt: Date;
  userId: number;
  genre: string;
}
