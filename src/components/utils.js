class Utils {
    static removeContent(elem) {
        while (elem.firstChild) {
            elem.firstChild.remove();
        }
    }
}

export default Utils;