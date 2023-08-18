import { Welcome } from '@/components'

export default function Home() {
  return (
    <>
      <section className='bg-BlackTan py-sectionPadding'>
        <div className='container pt-containerPaddingTop'>
          <Welcome />
        </div>
      </section>
      <section className='bg-NightBlack py-sectionPadding'>
        <div className='container pt-containerPaddingTop'>
          <Welcome />
        </div>
      </section>
    </>
  )
}
