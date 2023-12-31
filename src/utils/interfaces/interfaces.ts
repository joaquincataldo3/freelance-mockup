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

export interface Service extends CarouselImgs {
    title: string,
    subtitle: string,
    description: string
}

export interface DotsComponentProps {
    items: CarouselImgs[] | PackagePlans[],
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

export interface OneServiceProps {
    service: Service
}

export interface PackageList {
    id: number,
    description: string
}

export interface PackagePlans {
    id: number,
    name: string,
    price: number,
    includes: PackageList[]
}