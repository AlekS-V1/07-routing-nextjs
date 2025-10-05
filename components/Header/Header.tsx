import TagsMenu from '../TagsMenu/TagsMenu';
import css from './Header.module.css';
import Link from 'next/link';
import { NoteTag } from '@/types/note';

const staticTags: NoteTag[] = [
  'Todo',
  'Work',
  'Personal',
  'Meeting',
  'Shopping',
];

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <TagsMenu tags={staticTags} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
