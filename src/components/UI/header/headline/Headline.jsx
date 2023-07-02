import React from 'react';
import moment from "moment";
import classes from "./Headline.module.css";

const Headline = () => {
    const currentYear = moment().year();
    const currentMonth = moment().month();
    const numberSemester = currentMonth < 8 ? "II" : "I";
    const studyYear = currentMonth < 8
        ?
            `${currentYear - 1}/${currentYear - 2000}`
        :
            `${currentYear}/${currentYear - 1999}`

    return (
        <h1 className={classes.headlineOne}>
            Розклад занять студентів кафедри МПУіК на {numberSemester} семестр {studyYear} н.р.
        </h1>
    );
};

export default Headline;