import Banner from "./components/HomePage/Banner";
import Stats from "./components/HomePage/Stats";
import TrendingApps from "./components/HomePage/tradingApps/TrendingApps";

export default function Home() {
  return (
    <div>
      <Banner />

      <Stats />
      <TrendingApps />
    </div>
  );
}
