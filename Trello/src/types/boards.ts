export interface Board {
      id: string,
      title: string,
      background: string,
      lists: {
            id: string,
            title: string,
            cards: string[]
      }[]
}