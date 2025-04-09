import { createClient } from 'https://esm.sh/@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient('https://hluwidhgafkwfudijjqm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsdXdpZGhnYWZrd2Z1ZGlqanFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5OTg5NjUsImV4cCI6MjA1OTU3NDk2NX0.0TKQO564WyCdVj4TdKHyZpolZayHBifbDgw-Uwy4mrc')


const { data, error } = await supabase
  .from('danceClassStorage')
  .select('classname, date')
  .limit(10)
if(error) throw error;
console.log(data);



