export const revalidate = 20; // This sets the cache to expire after 20 seconds

export async function GET() {
  return Response.json({ time: new Date().toLocaleTimeString() });
}
