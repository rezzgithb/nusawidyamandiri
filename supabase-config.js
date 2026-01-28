import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'

const SUPABASE_URL = 'https://ftssiylvejbvjacmoneh.supabase.co'
const SUPABASE_KEY = 'sb_publishable_cW8gF9VRIMkI9tNnPb3NVA_qGkpCOPb'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
```

Update file `auth.js` untuk menggunakan Supabase:

```javascript
// Login function
async function loginWithEmail(email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })
    
    if (error) throw error
    
    localStorage.setItem('userRole', 'user')
    localStorage.setItem('userEmail', email)
    localStorage.setItem('userName', data.user.user_metadata.full_name)
    
    return true
  } catch (error) {
    console.error('Login error:', error.message)
    return false
  }
}

// Sign up function
async function signupWithEmail(email, fullName, password) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: fullName
        }
      }
    })
    
    if (error) throw error
    
    return true
  } catch (error) {
    console.error('Signup error:', error.message)
    return false
  }
}

// Logout function
async function logout() {
  await supabase.auth.signOut()
  localStorage.removeItem('userRole')
  localStorage.removeItem('userEmail')
  localStorage.removeItem('userName')
}