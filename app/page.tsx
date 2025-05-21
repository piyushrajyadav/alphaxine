import Banner from './components/home/Banner';
import Services from './components/home/Services';
import Benefits from './components/home/Benefits';
import MASpeaks from './components/home/MASpeaks';
import StatsTicker from './components/home/StatsTicker';
import Insights from './components/home/Insights';
import ContactCTA from './components/home/ContactCTA';
import DownloadSection from './components/home/DownloadSection';
import Partners from './components/home/Partners';

export default function Home() {
  return (
    <main>
      <Banner />
      <Services />
      <Benefits />
      <StatsTicker />
      <MASpeaks />
      <Partners />
      <DownloadSection />
      <Insights />
      <ContactCTA />
    </main>
  );
}
