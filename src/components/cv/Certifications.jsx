// components/EducationCertifications.js
import React from 'react';
import {formatDate} from "../../utils/date";

export default function Certifications({certifications}) {
        const isLastItem = (index) => {
            return index === certifications.length - 1;
        }
        return (
            <>
                {certifications.map((item, index) => (
                    <>
                      <div key={index}
                           className={'col-start-1 text-end mb-2 md:block hidden '}>

                        <p className={"text-md font-bold mb-1"}>{formatDate(
                            item.startDate)} - {item.endDate ? formatDate(
                            item.endDate) : 'Heden'}</p>
                        {/*<p className={"font-light text-sm"}>{getWrittenTimeDifference(item.startDate, item.endDate)}</p>*/}
                      </div>
                      {/*@todo on hover title={getWrittenTimeDifference(item.startDate, item.endDate)}*/}
                      <div
                          className="relative top-1 flex flex-col items-center">
                        <div
                            className="w-4 h-4 bg-primary-faded rounded-full"></div>
                        {!isLastItem(index) && <div
                            className="w-0.5 h-full bg-primary-faded z-0"></div>}
                      </div>


                      <div key={index}
                           className={!isLastItem ? "mb-10" : "mb-5"}>
                        <p className="text-md">
                          <span className={"font-bold"}>{item.course}</span>, {item.institution}</p>
                      </div>
                    </>
                ))}

            </>
        );
}

