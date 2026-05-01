import { Fab } from '@/components/fab'
import { Sidebar } from '@/components/sidebar'
import { TopBar } from '@/components/topbar'
import { Content } from './content'

export default function AppLayout() {
  return (
    <div className='min-h-screen bg-background'>
      {/* Desktop sidebar — only on lg+ */}
      <div className='hidden lg:block'>
        <Sidebar />
      </div>

      {/* Main content */}
      <div className='lg:ml-55'>
        <TopBar />
        <main className='p-8 md:p-8 lg:p-8 pb-28 lg:pb-16'>
          <Content />
        </main>
      </div>

      {/* FAB nav — shown on mobile + tablet (below lg) */}
      <div className='lg:hidden'>
        <Fab />
      </div>
    </div>
  )
}

function MobileTopBar() {
  return (
    <header className='h-14 border-b border-border/40 flex items-center justify-between px-5 bg-background/90 backdrop-blur-xl sticky top-0 z-30'>
      <div className='flex items-center gap-2'>
        <div className='relative'>
          <svg width='18' height='18' viewBox='0 0 18 18' fill='none'>
            <path
              d='M2 14 L6 8 L10 11 L14 4 L17 7'
              stroke='hsl(187,90%,51%)'
              strokeWidth='1.8'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <div className='absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-positive rounded-full animate-pulse-glow' />
        </div>
        <span className='font-display text-base font-semibold tracking-tight text-foreground'>Meridian</span>
      </div>
      <div className='flex items-center gap-1.5'>
        <div className='w-1.5 h-1.5 rounded-full bg-positive animate-pulse-glow' />
        <span className='text-[10px] font-mono text-muted-foreground uppercase tracking-wider'>Live</span>
      </div>
    </header>
  )
}
