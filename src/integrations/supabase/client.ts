// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://codukieacsfxemxobwiy.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvZHVraWVhY3NmeGVteG9id2l5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4NjE2NDksImV4cCI6MjA1MzQzNzY0OX0.wWt0ihM8dLXM_dMXpEVgLXb3exvWSCDXYzqQl88-E3g";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);