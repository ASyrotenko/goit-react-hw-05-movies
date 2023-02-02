import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    to: '/goit-react-hw-05-movies',
    text: 'Home',
  },
  {
    id: nanoid(),
    to: '/movies',
    text: 'Movies',
  },
];

export default items;
