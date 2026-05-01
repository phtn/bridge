'use client'
import { useRouter } from 'next/navigation'
import { SubmitEvent, useState, ViewTransition } from 'react'

export const TopBar = () => {
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useRouter()

  const handleSearch = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (query.trim()) {
      navigate.push(`/company/${query.trim().toUpperCase()}`)
      setQuery('')
      setSearchOpen(false)
    }
  }

  return (
    <header className='h-16 border-b-[0.5px] border-dotted border-neutral-500/30 flex items-center px-8 bg-background sticky top-0 z-40'>
      <div className='flex items-center justify-between w-full'>
        <h2 className='font-mono'>05-2026</h2>
        <h3 className='font-mono text-slate-300/50 text-sm'>
          {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
        </h3>
      </div>

      <div className='flex items-center justify-between'>
        <ViewTransition>
          {searchOpen && (
            <form
              // initial={{ width: 0, opacity: 0 }}
              // animate={{ width: 280, opacity: 1 }}
              // exit={{ width: 0, opacity: 0 }}
              // transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              onSubmit={handleSearch}
              className='overflow-hidden'>
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Search symbol (e.g. AAPL)...'
                className='h-9 bg-muted/50 border-border/50 text-sm font-mono placeholder:text-muted-foreground/50'
                onBlur={() => {
                  if (!query) setSearchOpen(false)
                }}
              />
            </form>
          )}
        </ViewTransition>

        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className='w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors'></button>

        <div className='hidden md:flex w-7 items-center justify-center bg-slate-400/5 font-bold'>/</div>
      </div>
    </header>
  )
}
