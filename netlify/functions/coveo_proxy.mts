import type { Context } from '@netlify/functions';

export default async (req: Request, context: Context): Promise<Response> => {
  const header = {
    'Access-Control-Allow-Methods': 'GET,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      status: 200,
      headers: header,
    });
  }

  if (req.method !== 'GET') {
    return new Response('Not Implemented', {
      status: 400,
      headers: header,
    });
  }
  let tokenEnv = process.env.coveo_key;

  const token = req.headers.get('authorization');

  return new Response(
    JSON.stringify({
      token,
      id: 'harnessproductionp9tivsqy',
      tokenEnv: tokenEnv,
    }),
    {
      status: 200,
      headers: header,
    }
  );
};
