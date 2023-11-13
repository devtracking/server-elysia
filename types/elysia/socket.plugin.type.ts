export type ISocketPlugin = {
  readonly clients: Map<number, string>;


  addClient(id: number, session: string): void;
  getClient(id: number): string | undefined;
  removeClient(id: number): void;
};
