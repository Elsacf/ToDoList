import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zzdqqpigtachocdtzuwf.supabase.co';
const supabaseAnonToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6ZHFxcGlndGFjaG9jZHR6dXdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM2MTcwMjEsImV4cCI6MTk3OTE5MzAyMX0.2-Rum4zxvrmLLHXdRlrErI-gFc9HyK2WRkkksPl55jM';

export default createClient(supabaseUrl, supabaseAnonToken);
