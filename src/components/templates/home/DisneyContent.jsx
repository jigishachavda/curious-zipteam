import React, { useEffect } from "react";
import Aos from "aos";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const DisneyContent = ({ contentSection }) => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      {contentSection && (
        <section
          className="disney-content"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="container h-100">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              pagination={true}
              modules={[EffectFade, Autoplay, Pagination]}
              effect="fade"
              loop={false}
              autoplay={{
                delay: 7000,
                disableOnInteraction: false,
              }}
              className="pb-5"
            >
              {contentSection?.items?.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="d-flex align-items-center z-3">
                    <div className="col-lg-8 pe-lg-4 mx-auto">
                      <h1 className="fontSM leadingSS res-fontXL res-leadingXL tk-degular fw-medium text-center text-lg-start tmb-55 dmb-50">
                        {item?.heading?.split(" ")?.map((word, index) => (
                          <span
                            key={index}
                            className={index === 0 ? "textblue" : ""}
                          >
                            {word}
                            {index !== index?.length - 1 ? " " : ""}
                          </span>
                        ))}
                      </h1>
                      <div className="col-12 col-lg-10 mx-auto mx-md-0 d-flex align-items-center justify-content-center justify-content-lg-start">
                        <div className="occasion w-100 h-100 bg-lightgray radiusS d-flex justify-content-center align-items-center">
                          <div className="p-2">
                            <GatsbyImage
                              image={getImage(
                                item?.imageTitle?.image?.localFile
                              )}
                              alt="" imgStyle={{ quality: 100 }}
                            />
                          </div>
                        </div>
                        <h4 className="fontLM leadingXX tk-degular fw-medium ms-2 ms-md-3 pe-7 pe-md-0 ">
                          {item?.imageTitle?.title
                            ?.split(" ")
                            ?.map((word, index) => (
                              <span
                                key={index}
                                className={index <= 2 ? "textblue" : ""}
                              >
                                {word}
                                {index !== index?.length - 1 ? " " : ""}
                              </span>
                            ))}
                        </h4>
                      </div>
                    </div>
                    <div className="col-4 ps-7 d-none d-lg-block h-100">
                      <div className="disney-img ms-auto">
                        <GatsbyImage
                          image={getImage(item?.rightImage?.localFile)}
                          alt=""
                          className="w-100 h-100 object-cover"
                          imgStyle={{ quality: 100 }}
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      )}
    </>
  );
};

export default DisneyContent;
