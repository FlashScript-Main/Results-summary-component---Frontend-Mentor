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
        "category": "Reaction",
        "score": 80,
        "icon": reactionIcon
      },
      {
        "category": "Memory",
        "score": 92,
        "icon": memoryIcon
      },
      {
        "category": "Verbal",
        "score": 61,
        "icon": verbalIcon
      },
      {
        "category": "Visual",
        "score": 72,
        "icon": visualIcon
      }
]

export {
    resultInfo,
    summaryTitle,
    summaryInfo
}