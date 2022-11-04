import { Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

router.post('/api/post', (ctx) => {
  ctx.response.body = { method: 'POST' };
});

router.get('/api/get', (ctx) => {
  ctx.response.body = { method: 'GET' };
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

export default router;
