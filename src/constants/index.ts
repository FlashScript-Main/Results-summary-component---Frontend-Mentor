import { memoryIcon, reactionIcon, verbalIcon, visualIcon } from "../assets";
import { ResultInfoType, StringType, SummaryInfoType } from "../types";

const resultInfo: ResultInfoType[] = [
    {
        id: 1, 
        resultTitle: "Your Result",
        resultScore: 76,
        resultValue: "of 100",
        resultGrade: "Great",
        resultDescription1: "You scored higher than",
        resultDescription2: "of the people who have taken these tests.",
        resultDescriptionVaue: 65
    }
];
const summaryTitle: StringType = "Summary";
const summaryInfo: SummaryInfoType[] = [
    {
        category: "Reaction",
        score: 80,
        icon: reactionIcon,
        bgColor: "bg-primary-light-red/10",
        textColor: "text-primary-light-red",
        delay: "slideInUp-1"
      },
      {
        category: "Memory",
        score: 92,
        icon: memoryIcon,
        bgColor: "bg-primary-orangey-yellow/10",
        textColor: "text-primary-orangey-yellow",
        delay: "slideInUp-2"
      },
      {
        category: "Verbal",
        score: 61,
        icon: verbalIcon,
        bgColor: "bg-primary-green-teal/10",
        textColor: "text-primary-green-teal",
        delay: "slideInUp-3"
      },
      {
        category: "Visual",
        score: 72,
        icon: visualIcon,
        bgColor: "bg-primary-cobalt-blue/10",
        textColor: "text-primary-cobalt-blue",
        delay: "slideInUp-4"
      }
]

export {
    resultInfo,
    summaryTitle,
    summaryInfo
}