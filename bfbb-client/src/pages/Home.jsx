import { Link } from "react-router-dom"
import { PageContent } from "../components/PageContent"
import { Header, Text } from "../components/Typography";


const Home = () => {

  return (
    <>
      <PageContent className='!items-center justify-center text-center'>
        <div className='animate-fade-in-up'>

          <div>
            <Header
              label='Battle for Bikini Bottom'
              className='pb-1 text-2xl lg:!text-6xl lg:pb-4 md:!text-4xl'
            />
            <Header
              label='Community Website'
              className='
              !font-mono 
              text-[#CCCCCC] 
              pb-4 
              lg:!text-4xl 
              lg:!pb-24 
              md:!text-2xl
              '
            />
          </div>

          <div className='font-bob lg:!text-2xl lg:!mt-[0px] xl:!text-3xl'>
            <PageLink label='About' route='/speedrun' />
            <PageLink label='Strats' route='/strats' />
            <PageLink label='Routes' route='/routes' />
            <PageLink label='Guides' route='/guides' />
            <PageLink label='Glossary' route='/glossary' />
            <PageLink label='Resources' route='/resources' />
          </div>

        </div>
      </PageContent>
    </>
  )
}

const PageLink = ({ label, route }) => {
  return (
    <Link to={route}>
      <Text
        className='
          text-yellow 
          p-2 
          lg:!p-7 
          lg:inline 
          font-bob 
          lg:!text-2xl 
          lg:!mt-[0px]
          xl:!text-3xl
        '
      >
        {label}
      </Text>
    </Link>
  );
};

export { Home }
