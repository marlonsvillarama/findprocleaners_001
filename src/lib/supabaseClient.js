
import { createClient } from "@supabase/supabase-js";
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from "$env/static/public"

const supabaseUrl = PUBLIC_SUPABASE_URL;
const supabaseKey = PUBLIC_SUPABASE_ANON_KEY;
console.log('supabaseUrl', supabaseUrl);
console.log('supabaseKey', supabaseKey);
export const supabase = createClient(supabaseUrl, supabaseKey);
