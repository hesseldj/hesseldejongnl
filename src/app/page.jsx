import Jobs from '../components/Jobs';
import Education from '../components/Education';
import Projects from '../components/Projects';
import React from "react";
import {getWrittenTimeDifference} from "../utils/date";

const jobs = [
    {
        company: 'Burst Statistics',
        role: 'Full Stack Developer & Product Designer',
        startDate: '2022-01',
        endDate: null,
        description: 'Mede-oprichter van een privacyvriendelijke WordPress analytics-plugin, gebruikt op 300.000+ websites. Ontwikkeling in Figma, React, SCSS, SQL, PHP met focus op UX en database-optimalisatie.',
        type: 'Part-time',
        tags: ['React', 'JS', 'PHP', 'SQL', 'HTML', 'SCSS', 'Figma'],
    },
    {
        company: 'Really Simple Plugins',
        role: 'Full Stack Developer',
        startDate: '2021-01',
        endDate: '2025-01',
        description: 'Ontwerp en ontwikkeling voor Complianz en Really Simple SSL met Figma, React, SCSS en PHP.',
        type: 'Part-time',
        tags: ['React', 'JS', 'PHP', 'HTML', 'SCSS', 'Figma'],
    },
    {
        company: 'Hessel de Jong Webdesign',
        role: 'UX/UI Designer & Full Stack Developer',
        startDate: '2018-03',
        endDate: '2023-03',
        description: 'Eigenaar en uitvoerder van webdesign projecten. Versterkte vaardigheden in Design, PHP, CSS, SQL, JavaScript, klantbeheer en projectbeheer.',
        type: 'Full-time',
        tags: ['PHP', 'CSS', 'SQL', 'JS', 'Webdesign', 'Klantbeheer', 'Projectbeheer'],
    },
    {
        company: 'Social Blue',
        role: 'UX/UI Designer',
        startDate: '2018-08',
        endDate: '2020-03',
        description: 'Ontwerp van conversiegerichte funnels met Figma. Verbeterde conversies door UX en psychologie.',
        type: 'Freelance',
        tags: ['Figma', 'UX', 'UI', 'Psychologie', 'Conversie-optimalisatie'],
    },
    {
        company: 'Trics Media',
        role: 'Co-owner & Interactive Designer',
        startDate: '2016-10',
        endDate: '2018-03',
        description: 'Van stagiair tot mede-eigenaar, verantwoordelijk voor klantbeheer, Design, HTML, CSS, PHP, JavaScript, WordPress.',
        type: 'Full-time & Stage',
        tags: ['Klantbeheer', 'Design', 'HTML', 'CSS', 'PHP', 'JavaScript', 'WordPress'],
    },
    {
        company: 'Netofex BV',
        role: 'Interactive Designer',
        startDate: '2016-06',
        endDate: '2016-09',
        description: 'Ontwerpen van funnels en landingspagina\'s tijdens de zomervakantie van mijn opleiding.',
        'type': 'Part-time',
        tags: ['UX', 'UI', 'Webdesign'],
    },
    {
        company: 'Aquive Media',
        role: 'Media Designer',
        startDate: '2015-09',
        endDate: '2016-09',
        description: 'Productfotografie, webdesign, A/B-testen en HTML/CSS-templates voor Magento-webshops.',
        type: 'Part-time & Stage',
        tags: ['Webdesign', 'A/B-testen', 'HTML', 'CSS'],
    }
];
const education = [
    {
        institution: 'Growth Tribe',
        course: 'Data Visualisation & Storytelling',
        type: 'Certificaat',
        startDate: '2022-11',
        endDate: '2022-11',
    },
    {
        institution: 'Noorderpoort',
        course: 'MBO, Mediavormgeving',
        type: 'Opleiding',
        startDate: '2013-09',
        endDate: '2017-06',
    },
    {
        institution: 'X-Panel Ltd',
        course: 'Traineeship Entrepreneurship, innovation, creativity and business planning',
        type: 'Certificaat',
        startDate: '2016-09',
        endDate: '2016-09',
    },
    {
        institution: 'Ronerborg VMBO',
        course: 'VMBO',
        type: 'Opleiding',
        startDate: '2011-09',
        endDate: '2012-06',
    },
    {
        institution: 'Lindenborg',
        course: 'HAVO',
        type: 'Opleiding',
        startDate: '2008-09',
        endDate: '2011-06',
    }
];
const projects = [
    {
        name: 'Fotografie',
        startDate: '2013-01',
        endDate: null,
        description: 'Meer dan 10 jaar ervaring in fotografie, met verkoop van werk voor aan de muur. Creativiteit en oog voor detail blijven ontwikkelen.',
        tags: ['Fotografie'],
    },
    {
        name: 'Over de Bal',
        startDate: '2018-01',
        endDate: null,
        description: 'Hobbyproject over amateurvoetbal. Beheer van website en sociale media, met talloze fotoreportages van sportparken. Blijven ontwikkelen (letterlijk en figuurlijk) als fotograaf.',
        tags: ['Fotografie', 'Webdesign'],
    }
];
const skills = () => {
    // Process job tags
    jobs.forEach(job => job.tags.forEach(tag => {
        if (skills[tag]) {
            skills[tag]++;
        } else {
            skills[tag] = 1;
        }
    }));

// Process project tags
    projects.forEach(project => project.tags.forEach(tag => {
        if (skills[tag]) {
            skills[tag]++;
        } else {
            skills[tag] = 1;
        }
    }));
    return skills;
}
// current date in yyyy-mm format
const yearsOfExperience = getWrittenTimeDifference('2015-09', new Date().toISOString().slice(0, 7) );
const birthDate = new Date('1996-09-26');
const age = Math.floor((new Date() - birthDate) / 31557600000);

export default function Home() {
    return (
        <div className="max-w-6xl mx-auto p-8 my-16 grid grid-cols-cv">
            <section className="my-4 content-end text-end mb-2 col-span-2 mr-8">
                <h2 className="text-xl font-bold">Hessel de Jong</h2>
                <ul className="list-none my-3 text-base">
                    <li className={"text-base mb-1"}>info@hesseldejong.com</li>
                    <li className={"text-base mb-1"}>+31 06 27 55 12 72</li>
                    <li className={"text-base mb-1"}>{birthDate.toLocaleDateString('nl-NL')} ({age} jaar)</li>
                </ul>
            </section>
            <section className={"col-span-1 col-start-3"}>
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

            <div className={"col-span-2 mb-4 mr-8"}>
                <h2 className="text-xl font-bold text-end mt-8">Werkervaring</h2>
                <p className={"font-light text-sm mb-2 text-end"}>{yearsOfExperience}</p>
            </div>
            <Jobs jobs={jobs}/>

            <div className={"col-span-2 mb-4 mr-8"}>
                <h2 className="text-xl font-bold text-end mt-8">Opleiding & Certificaten</h2>
                {/*<p className={"font-light text-sm mb-2 text-end"}></p>*/}
            </div>

            <Education education={education}/>

            <div className={"col-span-2 mb-4 mr-8"}>
                <h2 className="text-xl font-bold text-end mt-8">Persoonlijke projecten</h2>
                {/*<p className={"font-light text-sm mb-2 text-end"}></p>*/}
            </div>

            <Projects projects={projects}/>

            {/*<h2 className="text-xl font-bold text-end mt-6">Programeertalen & tools</h2>*/}
            {/*<Tools skills={skills()}/>*/}

            <div className={"col-span-2 mb-4 mr-8"}>
                <h2 className="text-xl font-bold text-end mt-8">Talen</h2>
                {/*<p className={"font-light text-sm mb-2 text-end"}></p>*/}
            </div>
            <ul className="list-none my-2 col-start-3 mt-8">
                <li>Nederlands: Moedertaal</li>
                <li>Engels: Vloeiend, zowel schriftelijk als mondeling</li>
            </ul>
        </div>
    );
}


