import { EmotoProvider } from 'src/interfaces/provider.interface';
import { FavouriteDestination } from '../interfaces/favouriteDestination.interface';

export interface User {
  _id: string;
  username: string;
  password: string;
  latitude: number;
  longitude: number;
  favourites: FavouriteDestination[];
  provider: EmotoProvider[];
}
