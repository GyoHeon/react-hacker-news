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
          {datas.map((data: ADatas, idx: number) => (
            <SwiperSlide key={data.id}>
              <TotalRankCard idx={idx} title={data.title} by={data.by} />
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
`;
const StyledSwiper = styled(Swiper)`
  padding-top: ${(props) => props.theme.totalRank.paddingTop}px;
  background-color: ${(props) => props.theme.totalRank.backrgoundColor};
  height: 427px;
  .swiper-pagination-bullet {
    background: ${(props) => props.theme.totalRank.swiperNoActive};
    width: 5px;
    height: 5px;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: ${(props) => props.theme.accentColor};
    border-radius: 5px;
  }
`;

export default TotalRank;
