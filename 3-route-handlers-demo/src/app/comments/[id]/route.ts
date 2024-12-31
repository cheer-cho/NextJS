import { comments } from './../data';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );

  return Response.json(comment, { status: 200 });
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );

  if (index === -1) {
    return Response.json({ message: 'Comment not found' }, { status: 404 });
  }

  const updatedComment = await request.json();
  comments[index].text = updatedComment.text;

  return Response.json(comments[index], { status: 200 });
}
