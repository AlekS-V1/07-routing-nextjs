import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import NotesClient from './Notes.client';
import { fetchNotes } from '@/lib/api';
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

const NotesPage = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const resolvedParams = await params;
  const tag = resolvedParams.slug?.[0] ?? 'All';

  const isValidTag = tag === 'All' || staticTags.includes(tag as NoteTag);
  if (!isValidTag) notFound();

  const queryClient = new QueryClient();
  const search = '';
  const page = 1;
  const perPage = 10;

  await queryClient.prefetchQuery({
    queryKey: ['notes', search, page, perPage, tag],
    queryFn: () => fetchNotes(search, page, perPage, tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
};

export default NotesPage;
