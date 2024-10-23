// components/SkillsLanguages.js
import React from 'react';

export default function Tools({skills}) {
    return (
        <section className="my-4 col-span-1 col-start-2">
            <ul className="list-none my-2">
                {Object.keys(skills).map(skill => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </section>
    );
}