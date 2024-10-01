import React, { useEffect, useState } from "react";
import { removeTags } from "../../../utils/helpers";
import BookDemoBtn from "../../common/BookDemoBtn";
import Aos from "aos";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const SkillManagement = ({ accordionId, contentSection }) => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const [currentImage, setCurrentImage] = useState(getImage(contentSection?.faq[0]?.image?.localFile));

  const handleAccordionClick = (imageFile) => {
    const newImage = getImage(imageFile);
    setCurrentImage(newImage);
  };

  return (
    <>
      {contentSection &&
        <section
          className={`skill-section ${contentSection.leftRightImage === "right" ? "right-skill-section" : "left-skill-section"}`}
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="container px-p-0 h-100">
            <div className='row h-100 align-items-center'>
              <div className={`col-lg-6 px-p-p ${contentSection.leftRightImage === "right" ? "order-1 order-lg-0" : "order-1"}`}>
                <div className={`col-lg-11 ${contentSection.leftRightImage === "right" ? "" : "ms-auto ps-lg-4"}`}>
                  <h1 className="fontSM leadingSS res-fontSX res-leadingXL tk-degular fw-semibold dmb-25">
                    {removeTags(contentSection?.heading)}
                  </h1>
                  <div className="accordion dmb-35" id={accordionId}>
                    {contentSection?.faq?.map((item, i) => (
                      <div
                        className={`accordion-item dmb-10 ${i === 0 ? "show" : ""}`}
                        key={i}
                      >
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button leadingXM res-leadingXX tk-degular fw-medium"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#skill-collapse${item.id}`}
                            aria-expanded={i === 0 ? "true" : "false"}
                            aria-controls={`skill-collapse${item.id}`}
                            onClick={() => handleAccordionClick(item?.image?.localFile)}
                          >
                            {item?.heading}
                          </button>
                        </h2>
                        <div
                          id={`skill-collapse${item.id}`}
                          className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
                          data-bs-parent={`#${accordionId}`}
                        >
                          <div className="accordion-body fontXX leadingXS res-fontM res-leadingL tk-degular fw-normal">
                            {removeTags(item?.description)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <BookDemoBtn
                    data-bs-toggle={"modal"}
                    data-bs-target={"#contact_modal"}
                    title={contentSection?.button?.title}
                    url={contentSection?.button?.url}
                  />
                </div>
              </div>
              <div className={`col-lg-6 tmb-50 ${contentSection.leftRightImage === "right" ? "order-0 order-lg-1" : "order-0"}`}>
                <div className={`skill-img h-100 res-w-100 radiusL no-radius overflow-hidden ${contentSection.leftRightImage === "right" ? "ms-auto" : ""}`}>
                  <GatsbyImage
                    image={currentImage}
                    alt=""
                    className="w-100 h-100 object-cover"
                    imgStyle={{ quality: 100 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  );
};

export default SkillManagement;
