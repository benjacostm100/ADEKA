import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://vjchtrkgsufvbixyoafk.supabase.co' // Encuéntrala en Settings → API
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqY2h0cmtnc3VmdmJpeHlvYWZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5NDczNjQsImV4cCI6MjA2MTUyMzM2NH0.9VScnGeTMddX6gETPJBpo947kIoPsAq1OOygmn57Q5w' // Usa la clave anónima (public)

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)