import { PageContent } from "../components/PageContent";
import { Header } from "../components/Header";
import { Text } from "../components/Text";

const Speedrunning = () => {
  return (
    <PageContent className='items-center'>
      <div>
        <Header label='About' className='text-yellow text-center' />
        <br /><br />
        <Text className=''>
          The <p className='text-yellow inline'>SpongeBob SquarePants: Battle for Bikini Bottom (2003)</p> speedrunning
          community is a dedicated group of gamers and enthusiasts who focus on
          completing the game as quickly as possible. This website acts as a hub
          for new and returning players to learn new strats, routes, and
          optimizations.

          <br /><br />

          The community has grown significantly over the years, bringing
          together players from around the world who share a passion for
          optimizing gameplay, discovering glitches, and mastering intricate
          techniques to achieve the fastest times.
          The speedrunning scene for this beloved platformer is characterized by
          its collaborative spirit, with runners frequently sharing strategies,
          routing tips, and new discoveries through forums, Discord channels,
          live streaming platforms, and now, this website.

          <br /><br />

          Community-organized events and competitions, such as marathons and
          races, further enhance the camaraderie and excitement within this
          vibrant community, celebrating not just the game itself but the
          collective effort to push the boundaries of what is possible in
          speedrunning.
        </Text>
      </div>
    </PageContent>
  );
};

export { Speedrunning }
