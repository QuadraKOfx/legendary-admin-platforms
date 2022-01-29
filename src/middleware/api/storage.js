const store = localStorage;
import get from "lodash/get";
import pullAt from "lodash/pullAt";

exports.get = (path, fallback) => {
    if (!path) return null;

    const pathSplit = path.split(".");
    const storageKey = pullAt(pathSplit, [0]);

    try {
        const object = JSON.parse(store.getItem(storageKey));
        return pathSplit.length ? get(object, pathSplit, fallback) : object;
    } catch (e) {
        console.error(e);
        return null;
    }
};

exports.exists = (path) => store.getItem(path) !== null;
