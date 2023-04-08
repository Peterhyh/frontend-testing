const promiseTest = (time) =>
    new Promise((resolve, reject) => {
        if (time) {
            setTimeout(() => resolve(`Promise was resolved in ${time} milliseconds`), time)
        } else {
            reject('You did not provide a time!')
        }
    });

const testPromise = async (time) => {
    console.log('Loading...');
    try {
        const pending = await promiseTest(time);
        console.log(pending)
    } catch (err) {
        console.log(err);
    }
};

testPromise(7000)