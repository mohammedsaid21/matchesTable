import React from "react";
import Styled from "@emotion/styled";
import GoTop from "../img/footer/gotop.png";
import News from "../img/footer/news.png";
import Facebook from "../img/footer/facebook.png";
import Twitter from "../img/footer/twitter.png";
import Telegram from "../img/footer/telegram.png";
import Instagram from "../img/footer/instagram.png";
import Youtube from "../img/footer/youtube.png";
import Linkedin from "../img/footer/linkedin.png";
import { Container } from "@mui/system";

const MainContainer = Styled.div`
    background-color: rgba(247, 247, 247, 1);
    padding: 1.5rem;
`;

const ContainerGoTop = Styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transition: .3s all;
  &:hover {
    color: #234ec4;
  }
`;

const GoToTopStyle = Styled.p`
    font-size: 13px;
  `;

const GoTopIcon = Styled.img`
width: 12px ;
height: 12px;
margin-right: 5px;
`;

const ContainerLine = Styled.div`
    display: flex ;
    width: 100%;
    justify-content: space-between ;
    align-items: center;
  `;

const LineStyle = Styled.div`
    border-top: 1px solid rgba(204, 204, 204, 1);
     width: 45%;
  `;

const NewsLine = Styled.img`
  width: 80px ;
  height: 30px;
  `;

const ContainerList = Styled.div`
    display: flex;
    width: 80%;
    margin: 1rem auto;
    @media screen and (max-width: 992px) {
      width: 100%
    }
`;

const ListOrder = Styled.div`
        display: flex;
       justify-Content: space-between;
        width: 100%;
`;

const ListItem = Styled.p`
  font-weight: bold;
  font-size: 14px;
  @media screen and (max-width: 992px) {
    font-size: 11px;
  }
`;

const ContainerSocialContent = Styled.div`
    display: flex;
    width: 40%;
    margin: 2rem auto;
    @media screen and (max-width: 992px) {
      width: 80%
    }
`;

const SocialImg = Styled.img`
  width: 40px ;
  height: 40px;
  @media screen and (max-width: 768px) {
    width: 26px;
    height: 34px;
  }
`;

const LineEndStyle = Styled.div`
border-top: 1px solid rgba(204, 204, 204, 1);
 width: 100%;
`;

const ListLastItem = Styled.p`
  font-size: 13px;
  @media screen and (max-width: 992px) {
    font-size: 9px
  }
`;

const CopyRight = Styled.div`
    width:  100%;
    display: flex;
    justify-content: center;
`;

const CopyRightWord = Styled.p`
    font-size: 13px;
`;

function Footer() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <MainContainer>
      <Container>
        <ContainerGoTop onClick={scrollUp}>
          <GoToTopStyle>العودة الى الاعلى</GoToTopStyle>
          <GoTopIcon src={GoTop} />
        </ContainerGoTop>

        <ContainerLine>
          <LineStyle />

          <NewsLine src={News} />

          <LineStyle />
        </ContainerLine>

        <ContainerList>
          <ListOrder>
            <ListItem>متابعات</ListItem>
            <ListItem>دوليات</ListItem>
            <ListItem>تجارة واسوق</ListItem>
            <ListItem>منوعات</ListItem>
            <ListItem>مقال</ListItem>
            <ListItem>تقنية</ListItem>
            <ListItem>طب</ListItem>
          </ListOrder>
        </ContainerList>

        <ContainerSocialContent>
          <ListOrder>
            <SocialImg src={Facebook} />
            <SocialImg src={Twitter} />
            <SocialImg src={Instagram} />
            <SocialImg src={Telegram} />
            <SocialImg src={Youtube} />
            <SocialImg src={Linkedin} />
          </ListOrder>
        </ContainerSocialContent>

        <LineEndStyle />

        <ContainerList>
          <ListOrder>
            <ListLastItem>تطبيقات اخبار</ListLastItem>
            <ListLastItem>خدمة Rss</ListLastItem>
            <ListLastItem>سياسة الخصوصية</ListLastItem>
            <ListLastItem>مزودوا الخدمة</ListLastItem>
            <ListLastItem>حول اخبار</ListLastItem>
            <ListLastItem>ترددات اخبار</ListLastItem>
            <ListLastItem>اتصل بنا</ListLastItem>
          </ListOrder>
        </ContainerList>

        <CopyRight>
          <CopyRightWord>© جميع الحقوق محفوظة لشبكة العربية 2022</CopyRightWord>
        </CopyRight>
      </Container>
    </MainContainer>
  );
}

export default Footer;
