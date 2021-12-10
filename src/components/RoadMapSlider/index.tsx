import Slider from '../../components/Slider'
import RoadMapCard from '../RoadMapCards'
import * as S from './styles'

const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '60px',
  slidesToShow: 2,
  speed: 500
}

const RoadMapSlider = () => {
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        <RoadMapCard />
      </Slider>
    </S.Wrapper>
  )
}

export default RoadMapSlider
