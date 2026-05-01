'use client'
import Link from 'next/link'

const navItems = [
  { icon: '', label: 'Overview', path: '/' },
  { icon: '', label: 'Explore', path: '/explore' },
  { icon: '', label: 'Watchlist', path: '/watchlist' },
  { icon: '', label: 'Markets', path: '/markets' }
]

export const Sidebar = () => {
  return (
    <aside className='fixed left-0 top-0 bottom-0 w-16 lg:w-55 bg-background border-r-[0.5px] border-dotted border-neutral-500/30 z-50 flex flex-col px-[0.5px]'>
      {/* Logo */}
      <div className='h-16 flex items-center justify-center lg:justify-start lg:px-6 border-b-[0.5px] border-dotted border-neutral-500/30'>
        <div className='flex items-center'>
          <h2 className='font-mono text-slate-300/50'>Web App</h2>
        </div>
      </div>

      {/* Navigation */}
      <nav className='flex-1 py-4 space-y-1'>
        {navItems.map(({ label, path }) => {
          const isActive = location.pathname === path
          return (
            <Link
              key={path}
              href={path}
              className={`relative flex items-center gap-3 px-6 h-10 group
                ${
                  isActive
                    ? 'text-primary bg-primary/8'
                    : 'text-foreground/50 hover:text-foreground hover:bg-foreground/5'
                }`}>
              {isActive && (
                <div
                  className='absolute left-0 top-1/2 -translate-y-1/2 w-0.75 h-5 bg-primary rounded-r-full'
                  // transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <span className='hidden lg:block font-mono text-sm'>{label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Status */}
      <div className='p-3 lg:p-4 border-t-[0.5px] border-dotted border-neutral-500/30'>
        <div className='flex items-center justify-center lg:justify-start gap-2'>
          <div className='w-2 h-2 rounded-full bg-positive animate-pulse-glow' />
          <span className='hidden lg:block font-mono text-sm text-slate-300/50'>re-up.ph</span>
        </div>
      </div>
    </aside>
  )
}
