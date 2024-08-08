import { Link } from "react-router-dom"
import { PageContent } from "../components/PageContent"

const Home = () => {

    console.log(window.innerWidth)
    console.log(window.innerHeight)

    return (
        <PageContent className='flex items-center justify-center text-center'>
            <div className='animate-fade-in-up'>
                <h1 className='font-bob text-white pb-1 lg:!text-6xl lg:pb-4 md:!text-4xl'>Battle for Bikini Bottom</h1>
                <h1 className='font-mono text-white pb-4 lg:!text-6xl lg:pb-36 md:!text-2xl'>Community Website</h1>
                <div className='font-bob text-yellow lg:!text-2xl lg:!mt-[0px] xl:!text-3xl'>
                    <PageLink label='About' route='/speedrunning'/>
                    <PageLink label='Strats' route='/strats'/>
                    <PageLink label='Routes' route='/routes'/>
                    <PageLink label='Guides' route='/guides'/>
                    <PageLink label='Glossary' route='/glossary'/>
                    <PageLink label='Resources' route='resources'/>
                </div>
            </div>
        </PageContent>
    )
}

const PageLink = ({ label, route }) => {
    return <Link to={route}><p className='p-2 lg:!p-7 lg:inline'>{label}</p></Link>
};

export { Home }
