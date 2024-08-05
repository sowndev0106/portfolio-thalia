import { IGroupBannerProps } from "../../components/GroupBanner";

export interface IBrandingLogo {
    url: string,
    path: string
}
interface IChipSection {
    url: string,
    text: string
}
export const brandingIcons: Array<IBrandingLogo> = [
    {
        path: "./assets/images/logo-branding/logo-partners-1.png",
        url: "#"
    },
    {
        path: "./assets/images/logo-branding/logo-partners-2.png",
        url: "#"
    },
    {
        path: "./assets/images/logo-branding/logo-partners-3.png",
        url: "#"
    },
    {
        path: "./assets/images/logo-branding/logo-partners-4.png",
        url: "#"
    },
    {
        path: "./assets/images/logo-branding/logo-partners-5.png",
        url: "#"
    },
    {
        path: "./assets/images/logo-branding/logo-partners-6.png",
        url: "#"
    },
    {
        path: "./assets/images/logo-branding/logo-partners-7.png",
        url: "#"
    },
    {
        path: "./assets/images/logo-branding/logo-partners-8.png",
        url: "#"
    },
    {
        path: "./assets/images/logo-branding/logo-partners-9.png",
        url: "#"
    },
    {
        path: "./assets/images/logo-branding/logo-partners-10.png",
        url: "#"
    },
    {
        path: "./assets/images/logo-branding/logo-partners-11.png",
        url: "#"
    }


]
export const chipSections: Array<IChipSection> = [
    { url: "#", text: "Brand Guideline" },
    { url: "#", text: "Art Consulting" },
    { url: "#", text: "In-game UIUX design" },
    { url: "#", text: "Gaming Websites" },
    { url: "#", text: "Gaming Creative Banners" },
    { url: "#", text: "Logo Branding" },
    { url: "#", text: "Web3" },
    { url: "#", text: "GameFi" },
    { url: "#", text: "Logo Branding" },
    { url: "#", text: "Brand Guideline" }
];


// GroupBanner.tsx
export interface IBanner {
    title?: string;
    image: string;
    rounded?: {
        topLeft?: boolean;
        topRight?: boolean;
        bottomLeft?: boolean;
        BottomRight?: boolean;
    }
    borderColor?: keyof typeof classNameColorSystem;
}
export const classNameColorSystem = {
    purple: "border-purple border-opacity-60 ",
    yellowGreen: "border-yellow-green border-opacity-30",
}

export const gamingCreativeBanners: Array<IGroupBannerProps> = [{
    left: [

        {
            title: "Gaming Creative Banner 2",
            image: "./assets/images/banners/gaming-creative-banner-2.png",
            borderColor: "purple",
            rounded: {
                topRight: true,
                bottomLeft: true
            }

        },

    ],
    right: [
        {
            title: "Gaming Creative Banner 3",
            image: "./assets/images/banners/gaming-creative-banner-3.png",
            borderColor: "purple",
            rounded: {
                topRight: true,
                bottomLeft: true
            }
        },
        {
            title: "Gaming Creative Banner 3",
            image: "./assets/images/banners/gaming-creative-banner-5.png",
            borderColor: "purple",
            rounded: {
                topRight: true,
                bottomLeft: true
            }
        },

        {
            title: "Gaming Creative Banner 3",
            image: "./assets/images/banners/gaming-creative-banner-4.png",
            borderColor: "purple",
            rounded: {
                topRight: true,
                bottomLeft: true
            }
        },
        {
            title: "Gaming Creative Banner",
            image: "./assets/images/banners/gaming-creative-banner-1.png",
            borderColor: "purple",
            rounded: {
                topRight: true,
                bottomLeft: true
            }

        },
    ]
}]

export const inGameUXUIBanners: Array<IGroupBannerProps> = [
    {
        left: [
            {
                title: "Gaming Creative Banner",
                image: "./assets/images/banners/in-game-uxui-1.png",
                borderColor: "yellowGreen",
                rounded: {
                    topRight: true,
                    bottomLeft: true
                }

            },

        ],
        right: [
            {
                title: "Gaming Creative Banner 2",
                image: "./assets/images/banners/in-game-uxui-2.png",
                borderColor: "yellowGreen",
                rounded: {
                    topRight: true,
                    bottomLeft: true
                }

            },
            {
                title: "Gaming Creative Banner 3",
                image: "./assets/images/banners/in-game-uxui-5.png",
                borderColor: "yellowGreen",
                rounded: {
                    topRight: true,
                    bottomLeft: true
                }
            },
            {
                title: "Gaming Creative Banner 3",
                image: "./assets/images/banners/in-game-uxui-9.png",
                borderColor: "yellowGreen",
                rounded: {
                    topRight: true,
                    bottomLeft: true
                }
            },
            {
                title: "Gaming Creative Banner 3",
                image: "./assets/images/banners/in-game-uxui-7.png",
                borderColor: "yellowGreen",
                rounded: {
                    topRight: true,
                    bottomLeft: true,
                }
            }
        ]
    },
    {
        right: [
            {
                title: "Gaming Creative Banner",
                image: "./assets/images/banners/in-game-uxui-3.png",
                borderColor: "yellowGreen",
                rounded: {
                    topRight: true,
                    bottomLeft: true
                }

            },

        ],
        left: [
            {
                title: "Gaming Creative Banner 2",
                image: "./assets/images/banners/in-game-uxui-8.png",
                borderColor: "yellowGreen",
                rounded: {
                    topRight: true,
                    bottomLeft: true
                }

            },
            {
                title: "Gaming Creative Banner 3",
                image: "./assets/images/banners/in-game-uxui-6.png",
                borderColor: "yellowGreen",
                rounded: {
                    topRight: true,
                    bottomLeft: true
                }
            },
            {
                title: "Gaming Creative Banner 3",
                image: "./assets/images/banners/in-game-uxui-4.png",
                borderColor: "yellowGreen",
                rounded: {
                    topRight: true,
                    bottomLeft: true
                }
            },
            {
                title: "Gaming Creative Banner 3",
                image: "./assets/images/banners/in-game-uxui-10.png",
                borderColor: "yellowGreen",
                rounded: {
                    topRight: true,
                    bottomLeft: true,
                }
            }
        ]
    }
]



export const web3Banners: Array<IGroupBannerProps> = [{
    left: [
        {
            title: "Gaming Creative Banner",
            image: "./assets/images/banners/web3-1.png",
            borderColor: "purple",
            rounded: {
                topRight: true,
                bottomLeft: true
            }

        },

    ],
    right: [
        {
            title: "Gaming Creative Banner 2",
            image: "./assets/images/banners/web3-2.png",
            borderColor: "purple",
            rounded: {
                topRight: true,
                bottomLeft: true
            }

        }]
}]

export const gameFiBanners: Array<IGroupBannerProps> = [{
    left: [
        {
            title: "Gaming Creative Banner",
            image: "./assets/images/banners/game-fi-1.png",
            borderColor: "purple",
            rounded: {
                topRight: true,
                bottomLeft: true
            }

        },

    ],
    right: [
        {
            title: "Gaming Creative Banner 2",
            image: "./assets/images/banners/game-fi-2.png",
            borderColor: "purple",
            rounded: {
                topRight: true,
                bottomLeft: true
            }

        },
        {
            title: "Gaming Creative Banner 3",
            image: "./assets/images/banners/game-fi-3.png",
            borderColor: "purple",
            rounded: {
                topRight: true,
                bottomLeft: true
            }
        },
        {
            title: "Gaming Creative Banner 3",
            image: "./assets/images/banners/game-fi-4.png",
            borderColor: "purple",
            rounded: {
                topRight: true,
                bottomLeft: true
            }
        },
        {
            title: "Gaming Creative Banner 3",
            image: "./assets/images/banners/game-fi-5.png",
            borderColor: "purple",
            rounded: {
                topRight: true,
                bottomLeft: true,
            }
        }]
}]


export const brandingGuidelineBanners: Array<IGroupBannerProps> = [{
    left: [
        {
            title: "Gaming Creative Banner",
            image: "./assets/images/banners/brand-guideline-4.png",
            borderColor: "purple",
            rounded: {
                topRight: true,
                bottomLeft: true
            }
        },

    ],
    right: [
        {
            title: "Gaming Creative Banner 2",
            image: "./assets/images/banners/brand-guideline-5.png",
            borderColor: "purple",
            rounded: {
                topRight: true,
                bottomLeft: true
            }

        },
        {
            title: "Gaming Creative Banner 3",
            image: "./assets/images/banners/brand-guideline-1.png",
            borderColor: "purple",
            rounded: {
                topRight: true,
                bottomLeft: true
            }
        },
        {
            title: "Gaming Creative Banner 3",
            image: "./assets/images/banners/brand-guideline-2.png",
            borderColor: "purple",
            rounded: {
                topRight: true,
                bottomLeft: true
            }
        },
        {
            title: "Gaming Creative Banner 3",
            image: "./assets/images/banners/brand-guideline-3.png",
            borderColor: "purple",
            rounded: {
                topRight: true,
                bottomLeft: true,
            }
        }]
}]

export const brandingLogos: Array<IBrandingLogo> = [
    {
        path: "./assets/images/logo-branding/logo-branding-1.png",
        url: "#"
    }
    , {
        path: "./assets/images/logo-branding/logo-branding-2.png",
        url: "#"
    }
    , {
        path: "./assets/images/logo-branding/logo-branding-3.png",
        url: "#"
    }
    , {
        path: "./assets/images/logo-branding/logo-branding-4.png",
        url: "#"
    }
    , {
        path: "./assets/images/logo-branding/logo-branding-5.png",
        url: "#"
    }
    , {
        path: "./assets/images/logo-branding/logo-branding-6.png",
        url: "#"
    },
    {
        path: "./assets/images/logo-branding/logo-branding-7.png",
        url: "#"
    }, {
        path: "./assets/images/logo-branding/logo-branding-8.png",
        url: "#"
    },
]