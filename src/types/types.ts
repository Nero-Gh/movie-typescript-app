export type Props = {
  image: string;
  id: number;
};

export interface Movie {
  id: number;
  name: string;
  year: number;
  image: string;
  cast: string[];
  description: string;
}
