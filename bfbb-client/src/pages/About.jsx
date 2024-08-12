import { PageContent } from "../components/PageContent";
import { Header, Text, LineBreak } from "../components/Typography";
import { Container } from "../components/Container"

const About = () => {
  return (
    <>
      <PageContent className='text-white'>
        <div className='grid grid-cols-1 xl:grid-cols-1 xl:gap-0 2xl:items-center 2xl:grid-cols-1'>
          <div className=''>
            <Container className='lg:bg-transparent'>
              <Header label="About" className='text-center text-yellow' />
              <LineBreak />
              <Text className='md:!text-lg'>
                The SpongeBob SquarePants: Battle for Bikini Bottom (2003)
                speedrunning community is a dedicated group of gamers and
                enthusiasts who focus on completing the game as quickly as
                possible. This website acts as a hub for new and returning
                players to learn new strats, routes, and optimizations.
              </Text>
              <LineBreak />
              <Text className='md:!text-lg'>
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
              <Text className='md:!text-lg'>
                Community-organized events and competitions, such as marathons
                and races, further enhance the camaraderie and excitement
                within this vibrant community, celebrating not just the game
                itself but the collective effort to push the boundaries of what
                is possible in speedrunning.
              </Text>
            </Container>
          </div>


          <div>
            <Container className='!bg-transparent'>
              <Header label='Any% World Record' className='text-center text-yellow' />
              <LineBreak />
              <LineBreak className='hidden 2xl:block' />
              <iframe className='rounded-xl mx-auto w-[600px] h-[300px]'
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
              <LineBreak />
              <div className='text-center'>
                <Text className='font-bob text-center inline md:!text-2xl'>by</Text>&nbsp;&nbsp;
                <Text className='font-bob text-center inline text-yellow md:!text-2xl'>
                  SHiFT
                </Text>&nbsp;&nbsp;
                <Text className='font-bob text-center inline md:!text-2xl'>on</Text>&nbsp;&nbsp;&nbsp;
                <Text className='font-bob text-center inline md:!text-2xl text-yellow'>
                  July 19, 2024
                </Text>
              </div>
            </Container>
          </div>

        </div>

        {/* <Container> */}
        {/*   <Header label="About" className='text-center text-yellow' /> */}
        {/*   <LineBreak /> */}
        {/*   <Text> */}
        {/*     The SpongeBob SquarePants: Battle for Bikini Bottom (2003) */}
        {/*     speedrunning community is a dedicated group of gamers and */}
        {/*     enthusiasts who focus on completing the game as quickly as */}
        {/*     possible. This website acts as a hub for new and returning */}
        {/*     players to learn new strats, routes, and optimizations. */}
        {/*   </Text> */}
        {/*   <LineBreak /> */}
        {/*   <Text> */}
        {/*     The community has grown significantly over the years, bringing */}
        {/*     together players from around the world who share a passion for */}
        {/*     optimizing gameplay, discovering glitches, and mastering */}
        {/*     intricate techniques to achieve the fastest times. The */}
        {/*     speedrunning scene for this beloved platformer is characterized */}
        {/*     by its collaborative spirit, with runners frequently sharing */}
        {/*     strategies, routing tips, and new discoveries through forums, */}
        {/*     Discord channels, live streaming platforms, and now, this */}
        {/*     website. */}
        {/*   </Text> */}
        {/*   <LineBreak /> */}
        {/*   <Text> */}
        {/*     Community-organized events and competitions, such as marathons */}
        {/*     and races, further enhance the camaraderie and excitement */}
        {/*     within this vibrant community, celebrating not just the game */}
        {/*     itself but the collective effort to push the boundaries of what */}
        {/*     is possible in speedrunning. */}
        {/*   </Text> */}
        {/* </Container> */}
        {/**/}
        {/* <LineBreak /> */}
        {/**/}
        {/* <Container> */}
        {/*   <Header label='Any% World Record' className='text-center text-yellow' /> */}
        {/*   <br /><br /> */}
        {/*   <iframe className='rounded-xl mx-auto' */}
        {/*     width="625" */}
        {/*     height="315" */}
        {/*     src="https://www.youtube.com/embed/s467wu5qtSk?si=j1jb2vw0h4qnLZoJ" */}
        {/*     title="YouTube video player" */}
        {/*     frameBorder="0" */}
        {/*     allow=" */}
        {/*         accelerometer;  */}
        {/*         autoplay;  */}
        {/*         clipboard-write;  */}
        {/*         encrypted-media;  */}
        {/*         gyroscope;  */}
        {/*         picture-in-picture;  */}
        {/*         web-share */}
        {/*       " */}
        {/*     referrerPolicy="strict-origin-when-cross-origin" */}
        {/*     allowFullScreen></iframe> */}
        {/*   <br /><br /> */}
        {/*   <div className='text-center'> */}
        {/*     <Text className='font-bob text-center inline'>by</Text>&nbsp;&nbsp; */}
        {/*     <Text className='font-bob text-center inline text-yellow'> */}
        {/*       SHiFT */}
        {/*     </Text>&nbsp;&nbsp; */}
        {/*     <Text className='font-bob text-center inline'>on</Text>&nbsp;&nbsp;&nbsp; */}
        {/*     <Text className='font-bob text-center inline text-yellow'> */}
        {/*       July 19, 2024 */}
        {/*     </Text> */}
        {/*   </div> */}
        {/* </Container> */}

      </PageContent>
    </>
  );
};

export { About }
