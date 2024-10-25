import React from 'react';

const SkillsTags = ({ skills }) => {
  return (
      <ul className="list-none my-2 mt-4 flex flex-wrap gap-2">
        {Object.entries(skills).map(([category, skillList]) => (
            <React.Fragment key={category}>
              {/*<li className="text-sm font-bold py-0.5 px-2">{category}:</li> /!* Display category name *!/*/}
              {Array.isArray(skillList) && skillList.map(skill => (
                  <li
                      className="text-sm bg-primary-faded py-0.5 px-2 rounded-md"
                      key={skill}
                  >
                    {skill}
                  </li>
              ))}
            </React.Fragment>
        ))}
      </ul>
  );
};

export default SkillsTags;
