import Image from 'next/image'

export const Content = () => {
  return (
    <div className='flex flex-col flex-1items-center justify-center font-sans dark:bg-background'>
      <main className='flex flex-1 space-y-14 w-full max-w-3xl flex-col items-center justify-between bg-white dark:bg-background sm:items-start'>
        <div className='flex flex-col gap-4 text-left'>
          <h1 className='max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50'>
            Templatest
          </h1>
          <p className='max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400'>
            Looking for a starting point for your next web app? Head over to{' '}
            <a href='https://github.com/phtn/bridge.git' className='font-medium text-zinc-950 dark:text-zinc-50'>
              Github (Bridge) Template
            </a>{' '}
            and clone the repo as template.
          </p>
        </div>
        <div className='flex flex-col gap-4 text-base font-medium sm:flex-row'>
          <a
            className='flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-40'
            href='https://bigticket.ph'
            target='_blank'
            rel='noopener noreferrer'>
            <Image className='dark:invert' src='/vercel.svg' alt='Vercel logomark' width={16} height={16} />
            Projects
          </a>
          <a
            className='flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]'
            href='https://launch-day-pied.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'>
            re-up.ph
          </a>
        </div>
      </main>
    </div>
  )
}
