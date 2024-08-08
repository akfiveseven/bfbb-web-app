import { Link } from "react-router-dom"
import { PageContent } from "../components/PageContent"

const Home = () => {

  return (
    <PageContent className='flex items-center justify-center text-center !m-0'>
      <div className='animate-fade-in-up'>
        <h1 className='font-bob text-white pb-1 text-2xl lg:!text-6xl lg:pb-4 md:!text-4xl'>Battle for Bikini Bottom</h1>
        <h1 className='font-mono text-white pb-4 lg:!text-4xl lg:!pb-24 md:!text-2xl'>Community Website</h1>
        <div className='font-bob text-yellow lg:!text-2xl lg:!mt-[0px] xl:!text-3xl'>
          <PageLink label='About' route='/speedrun' />
          <PageLink label='Strats' route='/strats' />
          <PageLink label='Routes' route='/routes' />
          <PageLink label='Guides' route='/guides' />
          <PageLink label='Glossary' route='/glossary' />
          <PageLink label='Resources' route='/resources' />
        </div>
      </div>
    </PageContent>
  )
}

const PageLink = ({ label, route }) => {
  return <Link to={route}><p className='p-2 lg:!p-7 lg:inline'>{label}</p></Link>
};

export { Home }
