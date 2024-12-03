import React from "react";
import Jobs from '../../components/cv/Jobs';
import Education from '../../components/cv/Education';
import Projects from '../../components/cv/Projects';
import Tools from '../../components/cv/Tools';
import Certifications from '../../components/cv/Certifications';
import { getWrittenTimeDifference } from "../../utils/date";
import { jobs, education, projects, certifications } from './cvData';

const collectAllTags = () => {
    const collectedTags = {};

    // Helper function to process tags from jobs or projects
    const processTags = (tagsObject) => {
        Object.entries(tagsObject).forEach(([category, tagList]) => {
            // Initialize the category in collectedTags if it doesn't exist
            if (!collectedTags[category]) {
                collectedTags[category] = [];
            }
            // Add tags to the corresponding category, avoiding duplicates
            tagList.forEach(tag => {
                if (!collectedTags[category].includes(tag)) {
                    collectedTags[category].push(tag);
                }
            });
        });
    };

    // Process job tags
    jobs.forEach(job => {
        processTags(job.tags);
    });

    // // Process project tags
    // projects.forEach(project => {
    //     processTags(project.tags);
    // });

    return collectedTags;
};

// current date in yyyy-mm format
const yearsOfExperience = getWrittenTimeDifference('2015-09', new Date().toISOString().slice(0, 7) );
const birthDate = new Date('1996-09-26');
const age = Math.floor((new Date() - birthDate) / 31557600000);
export default function Home() {
    return (
        <div className="max-w-max mx-auto p-8 my-16 grid md:grid-cols-cv grid-cols-cv-mobile bg-blob bg-no-repeat">
            <section className="my-4 content-end md:text-end mb-2 col-span-2 col-start-1 mr-8">
                <h2 className="text-xl font-bold">Hessel de Jong</h2>
                <ul className="list-none my-3 text-base">
                    <li className={"text-base mb-1"}>info@hesseldejong.com</li>
                    <li className={"text-base mb-1"}>+31 06 27 55 12 72</li>
                    <li className={"text-base mb-1"}>{birthDate.toLocaleDateString('nl-NL')} ({age} jaar)</li>
                </ul>
            </section>
            <section className={"md:col-span-1 col-span-2 md:col-start-3 col-start-1"}>
                <h2 className="text-2xl font-bold mb-4">
                    Ervaren designer en full stack developer met 9 jaar ervaring en een unieke combinatie van technische
                    en visuele vaardigheden.
                </h2>
                <p className={"text-lg"}>
                    Mijn kracht ligt in het begrijpen van zowel de technische als menselijke kant van software, waardoor
                    ik intuïtieve interfaces ontwikkel die de eindgebruiker centraal stellen, met oog voor detail en een
                    liefde voor goed gestructureerde code. Ik ben proactief en gefocust op procesverbetering, zowel voor
                    de gebruikerservaring als het bedrijfsbelang, en ik deel mijn visie daarover graag.
                </p>
            </section>
            <div className={"md:col-start-1 col-span-2  mb-4 mr-8"}>
                <h2 className="text-xl font-bold md:text-end mt-8">Werkervaring</h2>
                <p className={"font-light text-sm mb-2 md:text-end"}>{yearsOfExperience}</p>
            </div>
            <Jobs jobs={jobs}/>

            <div className={'md:col-start-1 col-span-2  mb-4 mr-8'}>
                <h2 className="text-xl font-bold md:text-end mt-8">Certificaten</h2>
                {/*<p className={"font-light text-sm mb-2 text-end"}></p>*/}
            </div>
            <Certifications certifications={certifications}/>

            <div className={'md:col-start-1 col-span-2  mb-4 mr-8'}>
                <h2 className="text-xl font-bold md:text-end mt-8">Opleidingen</h2>
                {/*<p className={"font-light text-sm mb-2 text-end"}></p>*/}
            </div>
            <Education education={education}/>

           

            <div className={'md:col-start-1 col-span-2  mb-4 mr-8'}>
                <h2 className="text-xl font-bold md:text-end mt-8">Persoonlijke
                    projecten</h2>
                {/*<p className={"font-light text-sm mb-2 text-end"}></p>*/}
            </div>

            <Projects projects={projects}/>

            <div className={'md:col-start-1 col-span-2  mb-4 mr-8'}>
                <h2 className="text-xl font-bold md:text-end mt-8">Programmeertalen & Tools</h2>
                {/*<p className={"font-light text-sm mb-2 text-end"}></p>*/}
            </div>
            <Tools skills={collectAllTags()}/>

            <div className={'md:col-start-1 col-span-2  mb-4 mr-8'}>
                <h2 className="text-xl font-bold md:text-end mt-8">Talen</h2>
                {/*<p className={"font-light text-sm mb-2 text-end"}></p>*/}
            </div>
            <ul className="list-none my-2 md:col-start-3 col-span-2  col-start-1 md:mt-8">
                <li><span className={"font-bold"}>Nederlands</span>: Moedertaal</li>
                <li><span className={"font-bold"}>Engels</span>: Vloeiend, zowel schriftelijk als mondeling</li>
            </ul>
        </div>
    );
}
