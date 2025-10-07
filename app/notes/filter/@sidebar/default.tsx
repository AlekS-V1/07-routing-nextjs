import Link from 'next/link';
import css from './SidebarNotes.module.css';
import { NoteTag } from '@/types/note';

const staticTags: NoteTag[] = [
  'All',
  'Todo',
  'Work',
  'Personal',
  'Meeting',
  'Shopping',
];

const NotesSidebar = async () => {
  return (
    <ul className={css.menuList}>
      {Array.isArray(staticTags) &&
        staticTags.map((tag) => (
          <li key={tag} className={css.menuItem}>
            <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
              {tag}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default NotesSidebar;
