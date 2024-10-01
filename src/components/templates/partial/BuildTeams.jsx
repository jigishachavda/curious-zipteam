import React, { useEffect } from "react";
import Aos from "aos";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { removeTags } from "../../../utils/helpers";

const BuildTeams = ({ contentSection }) => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      {contentSection && (
        <section
          className='build-team-section solution-team mpb-70 tpb-110 dpb-150'
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="container">
            <div className="col-xl-8 mx-auto tmb-25 dmb-55">
              <h1 className="col-9 col-md-5 col-xl-12 mx-auto fontSL leadingMX res-fontSX res-leadingXL tk-degular text-center fw-semibold dmb-25">
                {removeTags(contentSection?.heading)}
              </h1>
              <h5 className="fontXX leadingXS res-fontM res-leadingL tk-degular fw-normal text-center dmb-25">
                {removeTags(contentSection?.description)}
              </h5>
            </div>
            <div className="row rowB">
              {contentSection?.buildInnerBox?.map((item, i) => (
                <div
                  className="col-lg-6 col-xl-4 team-cards tmb-25 dmb-30"
                  key={i}
                >
                  <div
                    className='bg-white h-100 radiusL team-card'
                  >
                    <div className="team-img d-inline-flex align-items-center dmb-25">
                      <GatsbyImage
                        image={getImage(item?.image?.localFile)}
                        alt=""
                        imgStyle={{ quality: 100 }}
                        className="h-100 d-inline-block"
                      />
                    </div>
                    <h4 className="fontXM leadingXL tk-degular fw-medium dmb-10">
                      {removeTags(item?.heading)}
                    </h4>
                    <span className="fontM leadingL tk-degular fw-normal text-truncate text-truncate2">
                      {removeTags(item?.description)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BuildTeams;
