import app from './app.ts';
import './config/db.ts';

await app.listen({ port: 8000 });
