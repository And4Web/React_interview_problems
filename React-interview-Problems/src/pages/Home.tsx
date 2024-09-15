
// Components
import Accordian from "../components/1-accordian";
import RandomColorGenerator from "../components/2-randomColorGenerator";
import StarRating from "../components/3-starRating";
import ImageSlider from "../components/4-imageSlider";
import LoadMoreData from "../components/5-loadMoreData";
import TreeViewSideMenus from "../components/6-nestedSidebarMenu";
import menus from '../components/6-nestedSidebarMenu/data';
import QrCodeGenerator from "../components/7-qrCodeGenerator";
import LightDarkMode from "../components/8-LightDarkTheme";
import CustomScroll from "../components/9-customScrollIndicator";

function Home() {
  return (
    <div>
      {/* 1. Accordian Component */}
      <Accordian/>
      {/* 2. Random Hex or RGB color generator*/}
      <RandomColorGenerator/>
      {/* 3. */}
      <StarRating numberOfStars={10}/>
      {/* 4. Image Slider*/}
      {/* <ImageSlider url="https://picsum.photos/v2/list" limit={10} page={5}/> */}
      {/* 5. Load more data*/}
      <LoadMoreData/>
      {/* 6. Nested Menu bar or Dynamic Tree view*/}
      <TreeViewSideMenus menus={menus}/>
      {/* 7. QR Code generator*/}
      <QrCodeGenerator/>
      {/* 8. Light dark mode*/}
      <LightDarkMode/>
      {/* 9. Custom scroll indicator*/}
      <CustomScroll url={'https://dummyjson.com/products?limit=100'}/>
      {/* 10. */}
      {/* 11. */}
      {/* 12. */}
      {/* 13. */}
      {/* 14. */}
      {/* 15. */}
      {/* 16. */}
      {/* 17. */}
    </div>
  )
}

export default Home