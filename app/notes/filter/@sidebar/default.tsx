import Link from 'next/link';
import css from './SidebarNotes.module.css';
import { NoteTag } from '@/types/note';
// import { fetchNotes, fetchNotesByTags } from '@/lib/api';

// interface TagsMenuProps {
//   tags: NoteTag[];
// }

const NotesSidebar = async () => {
  const staticTags: NoteTag[] = [
    'All',
    'Todo',
    'Work',
    'Personal',
    'Meeting',
    'Shopping',
  ];
  //   const notes = await fetchNotes();
  //   const tags = notes.notes;
  console.log(staticTags);

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
