import { redirect } from 'next/navigation';
import { comments } from './../data';

type commentsIdParams = {
  params: Promise<{ id: string }>;
};

export async function GET(_: Request, { params }: commentsIdParams) {
  const { id } = await params;

  if (parseInt(id) > comments.length) {
    return redirect('/comments');
  }

  const comment = comments.find((comment) => comment.id === parseInt(id));

  return Response.json(comment, { status: 200 });
}

export async function PATCH(request: Request, { params }: commentsIdParams) {
  const { id } = await params;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));

  if (index === -1) {
    return Response.json({ message: 'Comment not found' }, { status: 404 });
  }

  const updatedComment = await request.json();
  comments[index].text = updatedComment.text;

  return Response.json(comments[index], { status: 200 });
}

export async function DELETE(_: Request, { params }: commentsIdParams) {
  const { id } = await params;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));

  if (index === -1) {
    return Response.json({ message: 'Comment not found' }, { status: 404 });
  }

  const deletedComment = comments.splice(index, 1);

  return Response.json(deletedComment[0], { status: 200 });
}
