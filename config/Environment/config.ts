import { resolve } from 'https://deno.land/std@0.162.0/path/mod.ts';
import { config } from 'https://deno.land/x/dotenv/mod.ts';
config({ path: resolve('.env') });

// console.log(resolve(Deno.mainModule, '.env'));
// console.log(dirname(Deno.mainModule));
console.log(resolve('.env'));
