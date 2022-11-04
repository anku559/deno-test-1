import { Router } from 'https://deno.land/x/oak/mod.ts';
import { readDirectory } from '../helpers/namespace/FileSystem.ts';

const router = new Router();

router.post('/api/post', (ctx) => {
  ctx.response.body = { method: 'POST' };
});

router.get('/api/get', async (ctx) => {
  const dirData = await readDirectory('public/audio');

  ctx.response.body = { method: 'GET', dirs: dirData };
});

router.put('/api/put', (ctx) => {
  ctx.response.body = { method: 'PUT' };
});

router.patch('/api/patch', (ctx) => {
  ctx.response.body = { method: 'PATCH' };
});

router.delete('/api/delete', (ctx) => {
  ctx.response.body = { method: 'DELETE' };
});
