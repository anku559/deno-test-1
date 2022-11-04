import 'https://deno.land/x/dotenv/load.ts';

export const PORTS_COUNT = +Deno.env.get('PORTS_COUNT')!;
export const STARTING_PORT = +Deno.env.get('STARTING_PORT')!;
