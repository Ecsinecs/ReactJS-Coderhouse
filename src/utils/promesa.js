let ok = true

let promesa = (task) => {
    return new Promise((resolve, reject) => {
        if (ok) {
            setTimeout(() => {
                resolve(task)
            }, 750);
        } else {
            reject ("error")
        }
    });
}

export default promesa