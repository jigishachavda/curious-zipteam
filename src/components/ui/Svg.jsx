import React from 'react'

const Svg = ({ menuIcon, ButtonArrow, ButtonWhiteArrow, rightArrow, rightWhiteArrow, shareBtn, blackLogo, whiteLogo, angleDonwBlack, angleDonwWhite, resMenuClose, downArrow, modalClose, resModalClose }) => {
    return (
        <>
            {menuIcon &&
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 19 12" {...menuIcon}>
                    <g id="Group_3712" data-name="Group 3712" transform="translate(-347 -89)">
                        <g id="Group_3711" data-name="Group 3711" transform="translate(21 3)">
                            <rect id="Rectangle_2521" data-name="Rectangle 2521" width="19" height="2" transform="translate(326 96)" fill="#c6c6c6" />
                            <rect id="Rectangle_2522" data-name="Rectangle 2522" width="19" height="2" transform="translate(326 91)" fill="#c6c6c6" />
                            <rect id="Rectangle_2523" data-name="Rectangle 2523" width="19" height="2" transform="translate(326 86)" fill="#c6c6c6" />
                        </g>
                    </g>
                </svg>
            }
            {ButtonArrow &&
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" className='ms-2' {...ButtonArrow}>
                    <g id="Group_3597" data-name="Group 3597" transform="translate(0 2)">
                        <path id="Path_9" data-name="Path 9" d="M5.828,22.48a1.048,1.048,0,0,1-.554-.157,1.62,1.62,0,0,1-.664-1.445V7.674a1.62,1.62,0,0,1,.664-1.445,1.225,1.225,0,0,1,1.421.17l8.48,6.458a1.761,1.761,0,0,1,0,2.838l-8.48,6.458a1.445,1.445,0,0,1-.866.328M6.055,7.9V20.656l8.318-6.334a.424.424,0,0,0,.051-.046.366.366,0,0,0-.051-.045Z" transform="translate(-4.61 -6.071)" />
                        <path id="Path_10" data-name="Path 10" d="M17.358,21.975a.686.686,0,0,1-.561-.31.934.934,0,0,1,.1-1.18l6.039-5.7a.28.28,0,0,0,.1-.194.285.285,0,0,0-.1-.195L16.9,8.705a.934.934,0,0,1-.1-1.18A.655.655,0,0,1,17.813,7.4l6.039,5.7a2.079,2.079,0,0,1,0,2.994l-6.039,5.7a.658.658,0,0,1-.455.187" transform="translate(-7.967 -6.39)" />
                    </g>
                </svg>
            }
            {ButtonWhiteArrow &&
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" className='ms-2' {...ButtonWhiteArrow}>
                    <g id="Group_3597" data-name="Group 3597" transform="translate(0 2)" fill='#fff'>
                        <path id="Path_9" data-name="Path 9" d="M5.828,22.48a1.048,1.048,0,0,1-.554-.157,1.62,1.62,0,0,1-.664-1.445V7.674a1.62,1.62,0,0,1,.664-1.445,1.225,1.225,0,0,1,1.421.17l8.48,6.458a1.761,1.761,0,0,1,0,2.838l-8.48,6.458a1.445,1.445,0,0,1-.866.328M6.055,7.9V20.656l8.318-6.334a.424.424,0,0,0,.051-.046.366.366,0,0,0-.051-.045Z" transform="translate(-4.61 -6.071)" />
                        <path id="Path_10" data-name="Path 10" d="M17.358,21.975a.686.686,0,0,1-.561-.31.934.934,0,0,1,.1-1.18l6.039-5.7a.28.28,0,0,0,.1-.194.285.285,0,0,0-.1-.195L16.9,8.705a.934.934,0,0,1-.1-1.18A.655.655,0,0,1,17.813,7.4l6.039,5.7a2.079,2.079,0,0,1,0,2.994l-6.039,5.7a.658.658,0,0,1-.455.187" transform="translate(-7.967 -6.39)" />
                    </g>
                </svg>
            }
            {rightArrow &&
                <svg xmlns="http://www.w3.org/2000/svg" width="19.528" height="19.528" viewBox="0 0 19.528 19.528"  {...rightArrow}>
                    <g id="Group_3631" data-name="Group 3631" transform="translate(-769 -836)">
                        <path id="Path_20615" data-name="Path 20615" d="M9.764,0A9.764,9.764,0,1,1,0,9.764,9.764,9.764,0,0,1,9.764,0Z" transform="translate(769 836)" fill="#426af0" opacity="0.16" />
                        <path id="Path_20613" data-name="Path 20613" d="M26.453,34.267l-4.083-3.1.755-.995,3.026,2.3,4.534-6.8,1.039.693Z" transform="translate(751.611 815.543)" fill="#426af0" />
                    </g>
                </svg>
            }
            {rightWhiteArrow &&
                <svg xmlns="http://www.w3.org/2000/svg" width="19.528" height="19.528" viewBox="0 0 19.528 19.528" {...rightWhiteArrow}>
                    <g id="Group_3699" data-name="Group 3699" transform="translate(-769 -836)">
                        <path id="Path_20615" data-name="Path 20615" d="M9.764,0A9.764,9.764,0,1,1,0,9.764,9.764,9.764,0,0,1,9.764,0Z" transform="translate(769 836)" fill="#fff" opacity="0.16" />
                        <path id="Path_20613" data-name="Path 20613" d="M26.453,34.267l-4.083-3.1.755-.995,3.026,2.3,4.534-6.8,1.039.693Z" transform="translate(751.611 815.543)" fill="#fff" />
                    </g>
                </svg>
            }
            {blackLogo &&
                <svg xmlns="http://www.w3.org/2000/svg" width="133.442" height="23.139" viewBox="0 0 133.442 23.139" {...blackLogo}>
                    <g id="Group_3562" data-name="Group 3562" transform="translate(-600.318 -372.293)">
                        <g id="Group_3541" data-name="Group 3541" transform="translate(633.813 372.7)">
                            <path id="Path_1" data-name="Path 1" d="M59.371,25.027H44.63V22.393L55.738,9.559l-.06-.151c-1.543.03-3.39.091-5.084.091h-5.63V6.866H59.31v2.6L48.2,22.333l.06.152c1.543-.031,3.36-.092,4.9-.092h6.205Z" transform="translate(-44.63 -6.472)" />
                            <path id="Path_2" data-name="Path 2" d="M61.676,6.475h3v2.24h-3Zm.182,4.419h2.6V25.03h-2.6Z" transform="translate(-44.514 -6.475)" />
                            <path id="Path_3" data-name="Path 3" d="M75.439,25.366c-3.117,0-4.752-1.726-5.327-4.571h-.03V29.18H67.449V10.866h2.633v4.147h.06c.606-2.815,2.27-4.511,5.267-4.511,3.814,0,5.811,2.845,5.811,7.386,0,4.631-2.118,7.477-5.781,7.477m3.179-7.477c0-3.179-1.332-4.995-4.177-4.995-2.663,0-4.359,1.756-4.359,4.9v.211c0,3.028,1.7,4.995,4.359,4.995,2.755,0,4.177-1.877,4.177-5.116" transform="translate(-44.474 -6.448)" />
                            <path id="Path_4" data-name="Path 4" d="M84.027,13.16H81.939V10.89h2.088v-3.9h2.634v3.9h4.51V13.16h-4.51v7.294c0,1.575.605,2.391,2.179,2.391a7.6,7.6,0,0,0,2.15-.362l.332,2.421a8.948,8.948,0,0,1-3.027.484c-2.966,0-4.268-1.937-4.268-4.571Z" transform="translate(-44.376 -6.472)" />
                            <path id="Path_5" data-name="Path 5" d="M91.98,18.04c0-4.722,2.875-7.537,7.174-7.537,4.207,0,6.478,2.694,6.478,6.568,0,.454,0,1.029-.06,1.694H94.614c.272,2.755,1.877,4.268,4.571,4.268a3.709,3.709,0,0,0,4.025-2.966l2.331.7c-.727,2.784-2.755,4.57-6.356,4.57-4.36,0-7.2-2.663-7.2-7.294m2.694-1.332h8.475c-.182-2.512-1.483-3.935-4.087-3.935a4.1,4.1,0,0,0-4.389,3.935" transform="translate(-44.307 -6.448)" />
                            <path id="Path_6" data-name="Path 6" d="M116.488,21.4h-.031a4.821,4.821,0,0,1-4.995,3.9c-2.754,0-4.539-1.332-4.539-4,0-2.482,1.573-4.328,4.993-4.328h4.572v-.756c0-2.21-.849-3.421-3.089-3.421-2.028,0-3.147.938-3.541,3.269l-2.512-.362c.485-3.3,2.421-5.146,6.145-5.146,3.935,0,5.63,2,5.63,5.63V25h-2.633Zm0-1.665V19.07h-4.209c-1.786,0-2.755.666-2.755,1.907,0,1.089.7,2.118,2.755,2.118,2.6,0,4.209-1.423,4.209-3.36" transform="translate(-44.205 -6.447)" />
                            <path id="Path_7" data-name="Path 7" d="M124.257,25h-2.634V10.866h2.634V14.68h.03c.605-2.875,2.452-4.177,4.933-4.177,3.239,0,4.6,1.877,4.874,4.42h.03c.514-3.028,2.179-4.42,4.933-4.42,3.723,0,4.994,2.422,4.994,5.449V25h-2.633V16.617c0-1.937-.818-3.723-3.39-3.723-2.421,0-3.874,1.362-3.874,3.723V25h-2.634V16.617c0-1.937-.818-3.723-3.39-3.723-2.421,0-3.874,1.362-3.874,3.723Z" transform="translate(-44.105 -6.448)" />
                        </g>
                        <g id="Group_3544" data-name="Group 3544" transform="translate(600.318 372.293)">
                            <path id="Path_9" data-name="Path 9" d="M6.312,26.133a1.622,1.622,0,0,1-.774-.192,1.9,1.9,0,0,1-.927-1.767V8.03a1.9,1.9,0,0,1,.927-1.767,1.9,1.9,0,0,1,1.984.208l11.843,7.9a2,2,0,0,1,0,3.47l-11.843,7.9a2.2,2.2,0,0,1-1.21.4M6.628,8.3V23.9l11.618-7.744a.572.572,0,0,0,.071-.056.5.5,0,0,0-.071-.055Z" transform="translate(-4.61 -6.071)" fill="#426af0" />
                            <path id="Path_10" data-name="Path 10" d="M17.645,24.974a1.009,1.009,0,0,1-.637-1.792l8.434-6.853a.324.324,0,0,0,.144-.234.33.33,0,0,0-.144-.235L17.008,9.008A1.009,1.009,0,0,1,18.28,7.442l8.434,6.852a2.269,2.269,0,0,1,0,3.6L18.28,24.749a1,1,0,0,1-.635.226" transform="translate(-4.528 -6.063)" fill="#426af0" />
                        </g>
                    </g>
                </svg>
            }
            {whiteLogo &&
                <svg xmlns="http://www.w3.org/2000/svg" width="133.442" height="23.139" viewBox="0 0 133.442 23.139" {...whiteLogo}>
                    <g id="Group_3562" data-name="Group 3562" transform="translate(-600.318 -372.293)">
                        <g id="Group_3541" data-name="Group 3541" transform="translate(633.813 372.7)">
                            <path id="Path_1" data-name="Path 1" d="M59.371,25.027H44.63V22.393L55.738,9.559l-.06-.151c-1.543.03-3.39.091-5.084.091h-5.63V6.866H59.31v2.6L48.2,22.333l.06.152c1.543-.031,3.36-.092,4.9-.092h6.205Z" transform="translate(-44.63 -6.472)" fill="#fff" />
                            <path id="Path_2" data-name="Path 2" d="M61.676,6.475h3v2.24h-3Zm.182,4.419h2.6V25.03h-2.6Z" transform="translate(-44.514 -6.475)" fill="#fff" />
                            <path id="Path_3" data-name="Path 3" d="M75.439,25.366c-3.117,0-4.752-1.726-5.327-4.571h-.03V29.18H67.449V10.866h2.633v4.147h.06c.606-2.815,2.27-4.511,5.267-4.511,3.814,0,5.811,2.845,5.811,7.386,0,4.631-2.118,7.477-5.781,7.477m3.179-7.477c0-3.179-1.332-4.995-4.177-4.995-2.663,0-4.359,1.756-4.359,4.9v.211c0,3.028,1.7,4.995,4.359,4.995,2.755,0,4.177-1.877,4.177-5.116" transform="translate(-44.474 -6.448)" fill="#fff" />
                            <path id="Path_4" data-name="Path 4" d="M84.027,13.16H81.939V10.89h2.088v-3.9h2.634v3.9h4.51V13.16h-4.51v7.294c0,1.575.605,2.391,2.179,2.391a7.6,7.6,0,0,0,2.15-.362l.332,2.421a8.948,8.948,0,0,1-3.027.484c-2.966,0-4.268-1.937-4.268-4.571Z" transform="translate(-44.376 -6.472)" fill="#fff" />
                            <path id="Path_5" data-name="Path 5" d="M91.98,18.04c0-4.722,2.875-7.537,7.174-7.537,4.207,0,6.478,2.694,6.478,6.568,0,.454,0,1.029-.06,1.694H94.614c.272,2.755,1.877,4.268,4.571,4.268a3.709,3.709,0,0,0,4.025-2.966l2.331.7c-.727,2.784-2.755,4.57-6.356,4.57-4.36,0-7.2-2.663-7.2-7.294m2.694-1.332h8.475c-.182-2.512-1.483-3.935-4.087-3.935a4.1,4.1,0,0,0-4.389,3.935" transform="translate(-44.307 -6.448)" fill="#fff" />
                            <path id="Path_6" data-name="Path 6" d="M116.488,21.4h-.031a4.821,4.821,0,0,1-4.995,3.9c-2.754,0-4.539-1.332-4.539-4,0-2.482,1.573-4.328,4.993-4.328h4.572v-.756c0-2.21-.849-3.421-3.089-3.421-2.028,0-3.147.938-3.541,3.269l-2.512-.362c.485-3.3,2.421-5.146,6.145-5.146,3.935,0,5.63,2,5.63,5.63V25h-2.633Zm0-1.665V19.07h-4.209c-1.786,0-2.755.666-2.755,1.907,0,1.089.7,2.118,2.755,2.118,2.6,0,4.209-1.423,4.209-3.36" transform="translate(-44.205 -6.447)" fill="#fff" />
                            <path id="Path_7" data-name="Path 7" d="M124.257,25h-2.634V10.866h2.634V14.68h.03c.605-2.875,2.452-4.177,4.933-4.177,3.239,0,4.6,1.877,4.874,4.42h.03c.514-3.028,2.179-4.42,4.933-4.42,3.723,0,4.994,2.422,4.994,5.449V25h-2.633V16.617c0-1.937-.818-3.723-3.39-3.723-2.421,0-3.874,1.362-3.874,3.723V25h-2.634V16.617c0-1.937-.818-3.723-3.39-3.723-2.421,0-3.874,1.362-3.874,3.723Z" transform="translate(-44.105 -6.448)" fill="#fff" />
                        </g>
                        <g id="Group_3544" data-name="Group 3544" transform="translate(600.318 372.293)">
                            <path id="Path_9" data-name="Path 9" d="M6.312,26.133a1.622,1.622,0,0,1-.774-.192,1.9,1.9,0,0,1-.927-1.767V8.03a1.9,1.9,0,0,1,.927-1.767,1.9,1.9,0,0,1,1.984.208l11.843,7.9a2,2,0,0,1,0,3.47l-11.843,7.9a2.2,2.2,0,0,1-1.21.4M6.628,8.3V23.9l11.618-7.744a.572.572,0,0,0,.071-.056.5.5,0,0,0-.071-.055Z" transform="translate(-4.61 -6.071)" fill="#fff" />
                            <path id="Path_10" data-name="Path 10" d="M17.645,24.974a1.009,1.009,0,0,1-.637-1.792l8.434-6.853a.324.324,0,0,0,.144-.234.33.33,0,0,0-.144-.235L17.008,9.008A1.009,1.009,0,0,1,18.28,7.442l8.434,6.852a2.269,2.269,0,0,1,0,3.6L18.28,24.749a1,1,0,0,1-.635.226" transform="translate(-4.528 -6.063)" fill="#fff" />
                        </g>
                    </g>
                </svg>
            }
            {angleDonwBlack &&
                <svg xmlns="http://www.w3.org/2000/svg" width="9.71" height="6.997" viewBox="0 0 9.71 6.997" {...angleDonwBlack}>
                    <path id="Path_20922" data-name="Path 20922" d="M17.187,16.925a.552.552,0,0,1-.348-.98L21.45,12.2a.177.177,0,0,0,.079-.128.18.18,0,0,0-.079-.128L16.839,8.2a.552.552,0,0,1,.7-.857l4.612,3.747a1.241,1.241,0,0,1,0,1.97L17.535,16.8a.548.548,0,0,1-.347.123" transform="translate(16.925 -16.635) rotate(90)" />
                </svg>
            }
            {angleDonwWhite &&
                <svg xmlns="http://www.w3.org/2000/svg" width="9.71" height="6.997" viewBox="0 0 9.71 6.997" {...angleDonwWhite}>
                    <path id="Path_20922" data-name="Path 20922" d="M17.187,16.925a.552.552,0,0,1-.348-.98L21.45,12.2a.177.177,0,0,0,.079-.128.18.18,0,0,0-.079-.128L16.839,8.2a.552.552,0,0,1,.7-.857l4.612,3.747a1.241,1.241,0,0,1,0,1.97L17.535,16.8a.548.548,0,0,1-.347.123" transform="translate(16.925 -16.635) rotate(90)" fill="#f6f5f1" />
                </svg>
            }
            {resMenuClose &&
                <svg xmlns="http://www.w3.org/2000/svg" width="14.849" height="14.849" viewBox="0 0 14.849 14.849">
                    <g id="Group_3712" data-name="Group 3712" transform="translate(-351.151 -87.575)">
                        <g id="Group_3711" data-name="Group 3711" transform="translate(23.075 3)">
                            <rect id="Rectangle_2522" data-name="Rectangle 2522" width="19" height="2" transform="translate(328.075 98.01) rotate(-45)" fill="#fff" />
                            <rect id="Rectangle_2528" data-name="Rectangle 2528" width="19" height="2" transform="translate(329.49 84.575) rotate(45)" fill="#fff" />
                        </g>
                    </g>
                </svg>
            }
            {downArrow &&
                <svg xmlns="http://www.w3.org/2000/svg" width="16.409" height="16.522" viewBox="0 0 16.409 16.522" {...downArrow}>
                    <g id="Group_3615" data-name="Group 3615" transform="translate(16.409) rotate(90)">
                        <path id="Path_9" data-name="Path 9" d="M5.828,22.48a1.048,1.048,0,0,1-.554-.157,1.62,1.62,0,0,1-.664-1.445V7.674a1.62,1.62,0,0,1,.664-1.445,1.225,1.225,0,0,1,1.421.17l8.48,6.458a1.761,1.761,0,0,1,0,2.838l-8.48,6.458a1.445,1.445,0,0,1-.866.328M6.055,7.9V20.656l8.318-6.334a.424.424,0,0,0,.051-.046.366.366,0,0,0-.051-.045Z" transform="translate(-4.61 -6.071)" fill="#fff" />
                        <path id="Path_10" data-name="Path 10" d="M17.358,21.975a.686.686,0,0,1-.561-.31.934.934,0,0,1,.1-1.18l6.039-5.7a.28.28,0,0,0,.1-.194.285.285,0,0,0-.1-.195L16.9,8.705a.934.934,0,0,1-.1-1.18A.655.655,0,0,1,17.813,7.4l6.039,5.7a2.079,2.079,0,0,1,0,2.994l-6.039,5.7a.658.658,0,0,1-.455.187" transform="translate(-7.967 -6.39)" fill="#fff" />
                    </g>
                </svg>
            }
            {shareBtn &&
                <svg xmlns="http://www.w3.org/2000/svg" width="11.157" height="12.486" viewBox="0 0 11.157 12.486"{...shareBtn}>
                    <path id="Path_20582" data-name="Path 20582" d="M14.647,12.274a2.206,2.206,0,0,0-3.835-1.494v0L7.784,8.969a2.177,2.177,0,0,0,0-1.452L10.811,5.7v0a2.221,2.221,0,1,0-.459-.767h0L7.325,6.753A2.176,2.176,0,0,0,5.7,6.031a2.212,2.212,0,1,0,0,4.424,2.177,2.177,0,0,0,1.623-.722l3.028,1.814h0a2.183,2.183,0,0,0-.125.727,2.21,2.21,0,1,0,4.419,0Z" transform="translate(-3.49 -2)" fill="#f6f5f1" />
                </svg>
            }
            {modalClose &&
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" {...modalClose}>
                    <g id="Group_3792" data-name="Group 3792" transform="translate(-1110 -108)">
                        <g id="Group_3675" data-name="Group 3675" transform="translate(1740.791 1751.792) rotate(180)">
                            <circle id="Ellipse_408" data-name="Ellipse 408" cx="15" cy="15" r="15" transform="translate(630.792 1613.792) rotate(90)" fill="#426AF0" />
                        </g>
                        <g id="Group_3540" data-name="Group 3540" transform="translate(264.479 813.265) rotate(-45)">
                            <rect id="Rectangle_2337" data-name="Rectangle 2337" width="1.417" height="13.46" transform="translate(1095.522 114)" fill="#fff" />
                            <rect id="Rectangle_2338" data-name="Rectangle 2338" width="1.417" height="13.46" transform="translate(1102.96 120.022) rotate(90)" fill="#fff" />
                        </g>
                    </g>
                </svg>
            }
            {resModalClose &&
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" {...resModalClose}>
                    <g id="Group_3792" data-name="Group 3792" transform="translate(-1110 -108)">
                        <g id="Group_3675" data-name="Group 3675" transform="translate(1740.791 1751.792) rotate(180)">
                            <circle id="Ellipse_408" data-name="Ellipse 408" cx="15" cy="15" r="15" transform="translate(630.792 1613.792) rotate(90)" fill="#fff" />
                        </g>
                        <g id="Group_3540" data-name="Group 3540" transform="translate(264.479 813.265) rotate(-45)">
                            <rect id="Rectangle_2337" data-name="Rectangle 2337" width="1.417" height="13.46" transform="translate(1095.522 114)" fill="#426AF0" />
                            <rect id="Rectangle_2338" data-name="Rectangle 2338" width="1.417" height="13.46" transform="translate(1102.96 120.022) rotate(90)" fill="#426AF0" />
                        </g>
                    </g>
                </svg>
            }
        </>
    )
}

export default Svg
