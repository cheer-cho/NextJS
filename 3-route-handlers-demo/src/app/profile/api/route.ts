import { type NextRequest } from 'next/server';
import { cookies, headers } from 'next/headers';

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = await headers();
  console.log(headerList.get('authorization'));
  console.log(requestHeaders.get('authorization'));

  const theme = request.cookies.get('theme');
  console.log(theme);

  (await cookies()).set('resultsPerPage', '10');
  console.log((await cookies()).get('resultsPerPage'));

  return new Response('<h1>Profile data</h1>', {
    headers: {
      'Content-Type': 'text/html',
      'Set-Cookie': 'theme=dark',
    },
  });
}
