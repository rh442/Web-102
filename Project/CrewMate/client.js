import {createClient} from '@supabase/supabase-js'

const URL = 'https://bnxdfbalicacpdrecvrk.supabase.co'
const API_KEY = import.meta.env.VITE_APP_ACCESS_KEY

export const supabase =  createClient(URL,API_KEY)
