export interface Shows {
  id: string;
  weekDay: string;
  startTime: number;
  endTime: number;
  bandId: string;
}

export interface ShowsInputDTO {
  weekDay: string;
  startTime: number;
  endTime: number;
  bandId: string;
  token: string
}
