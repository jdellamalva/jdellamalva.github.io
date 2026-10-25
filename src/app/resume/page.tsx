import resume from "@/lib/data/resume.json";
import type { Metadata } from "next";
import ResumeRenderer from "./ResumeRenderer";

export const metadata: Metadata = {
    title: "JDM | Resume",
    description: "Joseph D. Della Malva's resume",
};

export default function ResumePage() {
    return <ResumeRenderer {...resume} />;
}
