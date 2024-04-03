function getFullYear() {
    let d = new Date();
    return d.getFullYear()
}

function getFooterCopy(isIndex) {
    if (isIndex === true) {
        return 'Holberton School'
    } else {
        return "Holberton School main dashboard"
    }
}

export { getFullYear , getFooterCopy};