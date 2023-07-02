import axios from "axios";
import React, { useState, useEffect } from 'react';
import lesson from '../config/timetable.json';
import timeTableJSON from "../config/timetable.json";

export default class LessonService {
    static async getAll () {
        const response = await axios.get("")
        return response.data
    }

    static getAllFromJson () {
        return lesson;
    }

    static getAllGroups () {
        const allGroups = [];

        timeTableJSON.map((jsonElement) => {
            jsonElement["group"].map((group) => {
                if (!allGroups.includes(group))
                    allGroups.push(group)
            })
        })

        return allGroups.sort();
    }
}