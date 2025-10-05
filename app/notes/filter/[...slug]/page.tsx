import NoteList from '@/components/NoteList/NoteList';
import { fetchNotesByTags } from '@/lib/api';
import { NoteTag } from '@/types/note';
import { notFound } from 'next/navigation';

const staticTags: NoteTag[] = [
  'All',
  'Todo',
  'Work',
  'Personal',
  'Meeting',
  'Shopping',
];

export default async function NotesPage({
  params,
}: {
  params: { slug?: string[] };
}) {
  const resolvedParams = await params;
  const tag = resolvedParams.slug?.[0] ?? 'All';

  const isValidTag = tag === 'All' || staticTags.includes(tag as NoteTag);
  if (!isValidTag) notFound();

  const response = await fetchNotesByTags({
    tag: tag !== 'All' ? tag : undefined,
    page: 1,
    perPage: 12,
  });

  return (
    <main>
      <h1>{tag === 'All' ? 'All Notes' : `Notes tagged: ${tag}`}</h1>
      {response.notes.length > 0 ? (
        <NoteList notes={response.notes} />
      ) : (
        <p>No notes found for tag: {tag}</p>
      )}
    </main>
  );
}
