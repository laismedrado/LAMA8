import { Shows } from "../model/Show";

export interface ShowRepository {
  createShow (show: Shows): Promise<void>
  getShowsByDate(id: string): Promise<Shows>;
}
