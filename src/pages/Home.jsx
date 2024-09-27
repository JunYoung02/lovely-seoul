import Header from '../components/layout/Header';
import Info from '../components/common/info/Info';
import InfoUser from '../components/common/info/InfoUser';
import InfoFav from '../components/common/info/InfoFav';

function Home() {
  return (
    <>
      <Header />
      <Info />
      <InfoUser />
      <InfoFav />
    </>
  );
}

export default Home;
