import ModalPreview from '@/components/ModalPreview/ModalPreview';
import { fetchNoteById } from '@/lib/api';

interface Props {
  params: Promise<{ id: string }>;
}

const NotePreview = async ({ params }: Props) => {
  const { id } = await params;
  const note = await fetchNoteById(id);
  return (
    <ModalPreview noteTag={note.tag}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </ModalPreview>
  );
};

export default NotePreview;
