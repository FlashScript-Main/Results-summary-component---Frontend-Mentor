import { facebookIcon, instagramIcon, twitterIcon } from "../assets";
import { FeatureInfoType, FooterIconsType, StringType } from "../types";

const headerAccess: StringType = "Apply for access";
const heroButton: StringType = "Learn more";
const featureInfo: FeatureInfoType[] = [
    {
        id: 1, 
        listNumber: "1",
        title: "Actionable insights",
        desc: "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."
    },
    {
        id: 2, 
        listNumber: "2",
        title: "Data-driven decisions",
        desc: "Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."
    },
    {
        id: 3, 
        listNumber: "3",
        title: "Always affordable",
        desc: "Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees."
    }
];
const testimonialTitle: StringType = "Be the first to test";
const testimonialdesc: StringType = "Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I'll be in touch to schedule a call.";
const testimonialButton: StringType = "Apply for access";
const footerIcons: FooterIconsType[] = [
    {
        id: 1,
        icon: facebookIcon,
        alt: "Facebook Logo"
    },
    {
        id: 2,
        icon: twitterIcon,
        alt: "Twitter Logo"
    },
    {
        id: 3,
        icon: instagramIcon,
        alt: "Instagram Logo"
    }
]

export {
    testimonialTitle,
    featureInfo,
    headerAccess,
    heroButton,
    testimonialButton,
    testimonialdesc,
    footerIcons
}