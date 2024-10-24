// components/SkillsLanguages.js
import React from 'react';
import SkillsTags from "./SkillsTags";

export default function Tools({skills}) {
    return (
        <section className="my-4 col-span-1 md:col-start-3 col-start-2">
            <SkillsTags skills={skills}/>
        </section>
    );
}