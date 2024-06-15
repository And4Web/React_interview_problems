
// Components
import Accordian from "../components/1-accordian"
import RandomColorGenerator from "../components/2-randomColorGenerator"
import StarRating from "../components/3-starRating"
import ImageSlider from "../components/4-ImageSlider"

function Home() {
  return (
    <div>
      {/* 1. Accordian Component */}
      <Accordian/>
      {/* 2. */}
      <RandomColorGenerator/>
      {/* 3. */}
      <StarRating numberOfStars={10}/>
      {/* 4. */}
      <ImageSlider url="https://picsum.photos/v2/list" limit={10} page={5}/>
      {/* 5. */}
      {/* 6. */}
      {/* 7. */}
      {/* 8. */}
      {/* 9. */}
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