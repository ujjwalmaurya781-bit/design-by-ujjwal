/**
 * Supabase DB and Storage Client Initializer
 */
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './config.js';

export const supabase = (SUPABASE_URL && SUPABASE_ANON_KEY) 
    ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) 
    : null;

if (!supabase && import.meta.env.DEV) {
    console.warn("Supabase is unconfigured or credentials are blank. Running in static fallback mode.");
}
