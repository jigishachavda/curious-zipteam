import React from 'react'

const BlogList = ({ data }) => {
    return (
        <>
            {data?.map((item, i) => (
                <h6 key={i} className='tk-degular text-black fw-normal fontXX leadingXS'
                    dangerouslySetInnerHTML={{
                        __html: item?.list?.replace(
                            /<div(?!.*?class=['"])/,
                            "<div class='text-black tk-degular fw-semibold fontXS res-fontSX tmb-25 dmb-15 tmt-25 dmt-45'"
                        ).replace(
                            /(<\/?div(?! class)(.*?)>)/g,
                            (match, p1) => {
                                return p1.startsWith('<div') ? `<div class='tmb-30 dmb-25'>` : `</div>`;
                            }
                        ).replace(
                            /<ul/g,
                            "<ul class='ps-4'"
                        ).replace(
                            /<li(?!.*?class=['"])/g,
                            "<li class='ps-2 dmb-20'"
                        ).replace(
                            /&nbsp;/g,
                            ''
                        ).replace(/<h3(.*?)>/g, "<div class='text-black tk-degular fw-semibold fontXS res-fontSX tmb-25 dmb-15 tmt-25 dmt-45'>")
                            .replace(/<\/h3>/g, "</div>")
                            .replace(/<h4(.*?)>/g, "<div class='text-black tk-degular fw-semibold fontXS res-fontSX tmb-25 dmb-15 tmt-25 dmt-45'>")
                            .replace(/<\/h4>/g, "</div>")
                            .replace(/<p(.*?)>/g, "<p class='dmb-25'>")
                            .replace(/<\/p>/g, "</p>")
                    }}
                >
                </h6>
            ))}
        </>
    )
}

export default BlogList
