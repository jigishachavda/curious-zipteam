import React, { useEffect } from "react";
import BookDemoBtn from "../../common/BookDemoBtn";
import Aos from "aos";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { removeTags } from "../../../utils/helpers";

const GetStarted = ({ contentSection }) => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      {contentSection && (
        <section
          className="get-start-section"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="container containerX res-max-w-100 px-p-0 h-100 ">
            <div className='row h-100'>
              <div
                className='get-content bgprimary radiusL no-radius h-100 d-lg-flex flex-row align-items-center justify-content-center dpt-50'
              >
                <div className="col-lg-6 d-flex flex-column align-items-start justify-content-start pe-4 tpb-40 dpb-50 dpt-50">
                  <h1 className="fontSS leadingSS res-fontSX res-leadingSX tk-degular fw-medium text-white dmb-10">
                    {removeTags(contentSection?.heading)}
                  </h1>
                  <h5 className="fontM leadingL tk-degular fw-normal text-white dmb-25">
                    {removeTags(contentSection?.description)}
                  </h5>
                  <BookDemoBtn
                    data-bs-toggle={"modal"}
                    data-bs-target={"#contact_modal"}
                    extraClass="btn-border-white"
                    title={contentSection?.button?.title}
                    url={contentSection?.button?.urlz}
                  />
                </div>
                <div className="col-lg-6 h-100 d-flex align-items-lg-end justify-content-start justify-content-lg-end">
                  <GatsbyImage
                    image={getImage(contentSection?.image?.localFile)}
                    alt=""
                    className='drop-shadow w-100 h-100 object-cover get-img'
                    imgStyle={{ quality: 100 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default GetStarted;
