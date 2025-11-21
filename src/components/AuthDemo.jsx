import { useState } from 'react'

function AuthDemo() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [mode, setMode] = useState('login')
  const [email, setEmail] = useState('admin@example.com')
  const [password, setPassword] = useState('admin123')
  const [name, setName] = useState('Admin User')
  const [token, setToken] = useState('')
  const [message, setMessage] = useState('')
  const [role, setRole] = useState('admin')

  const submit = async (e) => {
    e.preventDefault()
    setMessage('')
    try {
      const endpoint = mode === 'login' ? '/auth/login' : '/auth/register'
      const payload = mode === 'login' ? { email, password } : { name, email, password, role }
      const res = await fetch(`${baseUrl}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Request failed')
      setToken(data.token)
      setMessage(`Success! Logged in as ${data.role}`)
    } catch (err) {
      setMessage(err.message)
    }
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <div className="flex gap-3 mb-4">
            <button onClick={() => setMode('login')} className={`px-3 py-1 rounded ${mode==='login'?'bg-slate-900 text-white':'bg-white border'}`}>Login</button>
            <button onClick={() => setMode('register')} className={`px-3 py-1 rounded ${mode==='register'?'bg-slate-900 text-white':'bg-white border'}`}>Register</button>
          </div>
          <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4">
            {mode === 'register' && (
              <>
                <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="px-3 py-2 border rounded" />
                <select value={role} onChange={e=>setRole(e.target.value)} className="px-3 py-2 border rounded">
                  <option value="admin">admin</option>
                  <option value="manager">manager</option>
                  <option value="staff">staff</option>
                </select>
              </>
            )}
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="px-3 py-2 border rounded" />
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="px-3 py-2 border rounded" />
            <button className="sm:col-span-2 bg-slate-900 text-white rounded py-2">Submit</button>
          </form>
          {message && <p className="mt-3 text-sm">{message}</p>}
          {token && (
            <div className="mt-3">
              <p className="text-xs break-all"><span className="font-semibold">Token:</span> {token}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default AuthDemo
