import Jobs from '../components/cv/Jobs';
import Education from '../components/cv/Education';
import Projects from '../components/cv/Projects';
import React from "react";
import {getWrittenTimeDifference} from "../utils/date";
import Tools from '../components/cv/Tools';

const jobs = [
    {
        company: 'Burst Statistics',
        role: 'Full Stack Developer & Product Designer',
        startDate: '2022-01',
        endDate: null,
        description: 'Mede-oprichter van een WordPress analytics-plugin die privacy hoog in het vaandel heeft en momenteel op 300.000+ websites wordt gebruikt. Ontwierp gebruiksvriendelijke interfaces die intuïtief aanvoelen en zorgden voor betere gebruikerservaringen. Optimaliseerde de database en prestaties zodat de plugin naadloos werkt, ongeacht de WordPress-configuratie van de gebruiker. Geïmplementeerd GEO IP databases en automatische build-processen met bash scripts en SSH.',
        type: 'Part-time',
        tags: {
            frontend: ['React', 'HTML', 'SCSS'],
            backend: ['PHP', 'SQL'],
            automation: ['Docker', 'SSH', 'Git'],
            design: ['Figma', 'Data Visualisation'],
        },
    },
    {
        company: 'Really Simple Plugins',
        role: 'Full Stack Developer',
        startDate: '2021-01',
        endDate: '2025-01',
        description: 'Cruciale rol gespeeld in het verbeteren van de gebruikerservaring van Complianz en Really Simple SSL. Door gebruik van codesplitting en herstructurering van de codebase heb ik de prestaties van de plugins aanzienlijk verbeterd en de onderhoudbaarheid verhoogd.',
        type: 'Part-time',
        tags: {
            frontend: ['React', 'HTML', 'SCSS', 'Tailwind CSS', 'JS'],
            backend: ['PHP'],
            design: ['Figma'],
            performance: ['Performance Logging (PHP, JS)'],
        },
    },
    {
        company: 'Hessel de Jong Webdesign',
        role: 'UX/UI Designer & Full Stack Developer',
        startDate: '2018-03',
        endDate: '2023-03',
        description: 'Eigenaar en eindverantwoordelijke voor het ontwerpen en ontwikkelen van websites en maatwerk WordPress-oplossingen voor diverse klanten. Ontwikkelde een systeem met Imagick waarmee weerkaarten automatisch werden gegenereerd op basis van weerdata-API\'s, en deze als transparante PNG\'s werden geleverd aan regionale omroepen zoals RTV Drenthe en RTV Noord.',
        type: 'Full-time',
        tags: {
            frontend: ['HTML', 'CSS', 'JS'],
            backend: ['PHP', 'SQL', 'Imagick'],
            management: ['Klantbeheer', 'Projectbeheer'],
            design: ['UX', 'UI'],
        },
    },
    {
        company: 'Social Blue',
        role: 'UX/UI Designer',
        startDate: '2018-08',
        endDate: '2020-03',
        description: 'Ontwikkelde conversiegerichte funnels en werkte nauw samen met een Conversie Optimalisatie Specialist om de gebruikerservaring te verbeteren. Door mijn begrip van de psychologie achter ontwerpen zorgde ik voor significante verbeteringen in conversieratio’s. Gebruikte Hotjar en VWO om inzichten te verkrijgen en optimalisaties door te voeren.',
        type: 'Freelance',
        tags: {
            design: ['Figma','Sketch', 'UX', 'UI'],
            optimization: ['Conversie-optimalisatie', 'Hotjar', 'Visual Website Optimizer'],
        },
    },
    {
        company: 'Trics Media',
        role: 'Interactive Designer',
        startDate: '2016-10',
        endDate: '2018-03',
        description: 'Startte als stagiair en groeide door naar mede-eigenaar. Verantwoordelijk voor klantrelaties, projectbeheer en het ontwikkelen van interactieve oplossingen die klanten hielpen hun online doelen te bereiken.',
        type: 'Full-time & Stage',
        tags: {
            frontend: ['HTML', 'CSS', 'JS'],
            backend: ['PHP'],
            design: ['Adobe Photoshop', 'Sketch', 'WordPress'],
            management: ['Klantbeheer'],
        },
    },
    {
        company: 'Netofex BV',
        role: 'Interactive Designer',
        startDate: '2016-06',
        endDate: '2016-09',
        description: 'Werkte tijdens mijn opleiding als ontwerper aan funnels en landingspagina’s, met een focus op het verhogen van conversies en het verbeteren van de algehele gebruikservaring.',
        type: 'Part-time',
        tags: {
            design: ['UX', 'UI', 'Webdesign'],
        },
    },
    {
        company: 'Aquive Media',
        role: 'Media Designer',
        startDate: '2015-09',
        endDate: '2016-09',
        description: 'Begonnen als stagiair en later aangenomen als part-time designer. Verantwoordelijk voor productfotografie, video’s en het ontwerpen van A/B-testen, wat leidde tot meer conversies en verbeterde klantervaring op Magento-webshops.',
        type: 'Part-time & Stage',
        tags: {
            frontend: ['HTML', 'CSS', 'JS'],
            design: ['Webdesign', 'Fotografie', 'Video'],
            optimization: ['A/B-testen', 'Hotjar', 'VWO'],
        },
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
        institution: 'X-Panel Ltd',
        course: 'Traineeship Entrepreneurship, innovation, creativity and business planning',
        type: 'Certificaat',
        startDate: '2016-09',
        endDate: '2016-09',
    },
    {
        institution: 'Noorderpoort',
        course: 'MBO Mediavormgeving',
        type: '',
        startDate: '2013-09',
        endDate: '2017-06',
    },
    {
        institution: 'Ronerborg',
        course: 'VMBO',
        type: '',
        startDate: '2011-09',
        endDate: '2012-06',
    },
    {
        institution: 'Lindenborg',
        course: 'HAVO',
        type: '(Niet afgerond)',
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
                <h2 className="text-xl font-bold md:text-end mt-8">Opleiding &
                    Certificaten</h2>
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


