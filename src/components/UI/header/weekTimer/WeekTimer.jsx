import React from 'react';
import moment from "moment";
import classes from "./WeekTimer.module.css";

const WeekTimer = () => {
    const startWeek = moment().startOf('isoWeek').format('DD.MM.YY');
    const endWeek = moment().endOf('isoWeek').subtract(2, 'days').format('DD.MM.YY');

    function isNotSeptember1() {
        const now = moment();
        const currentYear = now.year();
        const september1 = moment({ year: currentYear, month: 8, day: 1 });

        if (now.isSame(september1, 'day')) {
            return moment( currentYear + '-09-01');
        } else {
            return moment(currentYear + '-02-01');
        }
    }

    function isFirstOrSecondWeek() {
        const startSemester = isNotSeptember1()
        const nextMonday = startSemester.add(8 - startSemester.isoWeekday(), 'days');
        const weeksSinceFeb1 = moment().diff(nextMonday, 'weeks');

        return weeksSinceFeb1 % 2 === 0 ? 'II' : 'I';
    }

        return (
        <p className={classes.weekTimer}>
            <b> {startWeek} - {endWeek} </b> навчання за розкладом <b> {isFirstOrSecondWeek()} </b> тижня
        </p>
    );
};

export default WeekTimer;