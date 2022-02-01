import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import styled from "styled-components";
import TotalRankCard from "./TotalRankCard";

type ADatas = {
  by: string;
  id: number;
  score: number;
  text: string;
  title: string;
};

function TotalRank({ datas }: any) {
  SwiperCore.use([Navigation, Pagination]);

  return (
    <Total>
      <h1>
        Current <br /> Total Top 5
      </h1>
      <div>
        <StyledSwiper
          className="TotalRank"
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {datas.map((data: ADatas) => (
            <SwiperSlide>
              <TotalRankCard title={data.title} by={data.by} />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </div>
    </Total>
  );
}

const Total = styled.section`
  width: 100%;
  h1 {
    @font-face {
      font-family: "Times New Roman", Times, serif;
      src: url("/public/times.ttf");
    }
    font-family: "Times New Roman";
    font-weight: 400;
    display: inline-block;
    width: 335px;
    font-size: 32px;
    line-height: 40px;
    margin: 36px 20px 24px;
  }
  section {
    height: 427px;
    padding-top: 54px;
    background-color: #f2f3f7;
  }
`;
const StyledSwiper = styled(Swiper)`
  height: 427px;
  padding-top: 54px;
  background-color: #f2f3f7;
  .swiper-pagination-bullet {
    width: 5px;
    height: 5px;
    background: ${(props) => props.theme.swiperNoActive};
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    border-radius: 5px;
    background: ${(props) => props.theme.accentColor};
  }
`;

export default TotalRank;
