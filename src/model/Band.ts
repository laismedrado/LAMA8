// export class Band {
//   constructor(
//     private id: string,
//     private name: string,
//     private musicGenre: string,
//     private responsible: string
//   ) { }

//   getId() {
//     return this.id
//   }

//   getName() {
//     return this.name
//   }

//   getMusicGenre() {
//     return this.musicGenre
//   }

//   getResponsible() {
//     return this.responsible
//   }
//   setName(name: string) {
//     this.name = name;
//   }

//   setMusicGenre(musicGenre: string) {
//     this.musicGenre = musicGenre;
//   }

//   setResponsible(responsible: string) {
//     this.responsible = responsible;
//   }
// }

export interface Band {
  id: string,
  name: string,
  musicGenre: string,
  responsible: string
}

export interface BandInputDTO {
  name: string,
  musicGenre: string,
  responsible: string,
  token: string
}

