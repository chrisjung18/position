import { boot } from 'quasar/wrappers'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

export default boot(({ app }) => {
  // make supabase available globally in Vue components
  app.config.globalProperties.$supabase = supabase
})