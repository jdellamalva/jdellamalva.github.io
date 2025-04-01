// import { getResume } from "@/lib/data/resume";
import resume from "@/lib/data/resume.json";
import { Metadata } from "next";

import ResumeRenderer from "./ResumeRenderer";

export const metadata: Metadata = {
    title: "JDM | Resume",
    description: "Joseph D. Della Malva's resume",
};

// export default async function Resume() {
//     const resume = await getResume();
//     return <ResumeRenderer {...resume} />;
// }

export default function ResumePage() {
    return <ResumeRenderer {...resume} />;
}
