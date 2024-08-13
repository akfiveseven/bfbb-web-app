import { PageContent } from "../components/PageContent";
import { Header, Text, LineBreak } from "../components/Typography";
import { Container } from "../components/Container"

const About = () => {
  return (
    <>
      <PageContent className='items-center !min-h-[calc(100vh-13rem)]'>
        <Container className='lg:bg-transparent'>
          <Header label="About" className='text-center text-yellow' />
          <LineBreak />
          <LineBreak />
          <Text className=''>
            The SpongeBob SquarePants: Battle for Bikini Bottom (2003)
            speedrunning community is a dedicated group of gamers and
            enthusiasts who focus on completing the game as quickly as
            possible. This website acts as a hub for new and returning
            players to learn new strats, routes, and optimizations.
          </Text>
          <LineBreak />
          <Text className=''>
            The community has grown significantly over the years, bringing
            together players from around the world who share a passion for
            optimizing gameplay, discovering glitches, and mastering
            intricate techniques to achieve the fastest times. The
            speedrunning scene for this beloved platformer is characterized
            by its collaborative spirit, with runners frequently sharing
            strategies, routing tips, and new discoveries through forums,
            Discord channels, live streaming platforms, and now, this
            website.
          </Text>
          <LineBreak />
          <Text className=''>
            Community-organized events and competitions, such as marathons
            and races, further enhance the camaraderie and excitement
            within this vibrant community, celebrating not just the game
            itself but the collective effort to push the boundaries of what
            is possible in speedrunning.
          </Text>
        </Container>

      </PageContent>
    </>
  );
};

export { About }
