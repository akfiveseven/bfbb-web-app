import { PageContent } from "../components/PageContent";
import { Header, Text } from "../components/Typography";

const Speedrunning = () => {
  return (
    <>
      <PageContent className='md:items-center'>
        {/* <div className='md:grid md:grid-cols-2 md:gap-16'> */}
        <div>
          <Header label='About' className='text-yellow text-center' />
          <br />

          <Paragraph
            text="
              The SpongeBob SquarePants: Battle for Bikini Bottom (2003)
              speedrunning community is a dedicated group of gamers and
              enthusiasts who focus on completing the game as quickly as
              possible. This website acts as a hub for new and returning
              players to learn new strats, routes, and optimizations.
              "
          />

          <br />

          <Paragraph
            text="
              The community has grown significantly over the years, bringing
              together players from around the world who share a passion for
              optimizing gameplay, discovering glitches, and mastering
              intricate techniques to achieve the fastest times. The
              speedrunning scene for this beloved platformer is characterized
              by its collaborative spirit, with runners frequently sharing
              strategies, routing tips, and new discoveries through forums,
              Discord channels, live streaming platforms, and now, this
              website.
              "
          />

          <br />

          <Paragraph
            text="
              Community-organized events and competitions, such as marathons
              and races, further enhance the camaraderie and excitement
              within this vibrant community, celebrating not just the game
              itself but the collective effort to push the boundaries of what
              is possible in speedrunning.
              "
          />




        </div>

        <div className='hidden md:block items-center text-center'>
          <Header label='Any% World Record' className='text-yellow' />
          <br /><br />
          <iframe className='rounded-xl mx-auto'
            width="625"
            height="315"
            src="https://www.youtube.com/embed/s467wu5qtSk?si=j1jb2vw0h4qnLZoJ"
            title="YouTube video player"
            frameBorder="0"
            allow="
                accelerometer; 
                autoplay; 
                clipboard-write; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture; 
                web-share
              "
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
          <br /><br />
          <div className=''>
            <Text className='font-bob text-center inline'>by</Text>&nbsp;&nbsp;
            <Text className='font-bob text-center inline text-yellow'>
              SHiFT
            </Text>&nbsp;&nbsp;
            <Text className='font-bob text-center inline'>on</Text>&nbsp;&nbsp;&nbsp;
            <Text className='font-bob text-center inline text-yellow'>
              July 19, 2024
            </Text>
          </div>
        </div>
        {/* </div> */}
      </PageContent>
    </>
  );
};

const Paragraph = ({ text }) => {
  return (
    <Text className='!text-xl'>{text}</Text>
  );
};

export { Speedrunning }
