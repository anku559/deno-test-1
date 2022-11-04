import { Application } from 'https://deno.land/x/oak/mod.ts';
import notImplemented from './notImplemented.routes.ts';

export default function route(app: Application) {
  // app.use(router.routes());
  app.use(notImplemented.routes());
  app.use(notImplemented.allowedMethods());
  app.use((ctx) => {
    ctx.response.status = 404;
    ctx.response.body = {
      code: 404,
      status: false,
      message: 'Invalid Endpoint.',
    };
  });
}
