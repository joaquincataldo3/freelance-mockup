import { ReactNode } from "react"

export interface HomeContextInterface {
    isNavbarOpen: boolean,
    handleNavbarClick: () => void
}

export interface ContextProp {
    children: ReactNode
}

export interface CarouselImgs {
    id: number,
    src: string
}

export interface ServicesImages extends CarouselImgs {
    title: string,
    subtitle: string
}

export interface DotsComponentProps {
    images: CarouselImgs[],
    handleClickOnDot: () => void,
    currentImage: number
}

export interface TextFrontImageProps {
    title: string,
    subtitle: string,
    currentImage?: number,
    currentIndex?: number
}

export interface ImageSrcProps {
    src: string
}

export interface ContactUsSendEmailForm {
    email: string,
    name: string,
    message: string
}

export interface ServicesListProps {
    maxIndex: number | null
}

export interface FirstViewBackgroundProps {
    src: string
}

export interface SocialMediaBoxProps {
    color: string,
    fontSize: string
}

export interface DataListProps {
    titleColor: string,
    subtitleColor: string,
    titleSize: string,
    subtitleSize: string
}

export interface LogoProps {
    color: string
}