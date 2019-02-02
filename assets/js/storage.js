"use strict";

const db = {
    get: (key, isJson = false) => {
        let item = localStorage.getItem(key);
        if (typeof item !== 'undefined') {
            return (isJson ? JSON.parse(item) : htmlEntities(item.replace(/^"|"$/g, '')));
        }
        return ''
    },
    set: (key, value) => {
        if (typeof value !== 'undefined' && (value.length > 0 || typeof value === 'object')) {
            localStorage.setItem(key, JSON.stringify(value))
        }
    },
    create: (key, value) => {
        if (!localStorage.getItem(key)) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    },
};
