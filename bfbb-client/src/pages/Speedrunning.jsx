import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { PageContent } from "../components/PageContent";
import { Header, Text, LineBreak } from "../components/Typography";
import { Container } from "../components/Container"
import { About } from "../pages/About"
import { Strats } from "./Strats";
import { Sidebar } from "../components/Sidebar";

const Speedrunning = () => {


  const location = useLocation();
  const [tab, setTab] = useState('');
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  console.log(tab);

  return (
    <>
      <Sidebar menu='speedrun' tab={tab}>
        {tab === '' &&
          <div className=''>
            <About />
          </div>
        }
        {tab === 'strats' &&
          <PageContent>
            <Header label="Strategies" className='hidden md:block text-center text-yellow' />
            <LineBreak className='hidden md:block' />
            <Strats />
          </PageContent>
        }
      </Sidebar>
    </>
  );
};

export { Speedrunning }
