export type LogementType = {
  id: string;
  title: string;
  cover: string;
  pictures: string[] | string;
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
};

export type LogementsType = LogementType[];
