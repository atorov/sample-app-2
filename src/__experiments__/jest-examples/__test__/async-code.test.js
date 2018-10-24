import delay from '../../../lib/delay'

// *** Testing Asynchronous Code

// Callbacks

test('the data is peanut butter', (done) => {
    function fetchData(cb) {
        delay(100).then(() => cb('peanut butter'))
    }

    function callback(data) {
        expect(data).toBe('peanut butter')
        done()
    }

    fetchData(callback)
})

// Promises
test('the data is peanut butter', () => {
    function fetchData() {
        return delay(100).then(() => ('peanut butter'))
    }

    expect.assertions(1)

    // Be sure to return the promise -
    // if you omit this return statement,
    // your test will complete before fetchData completes.
    return fetchData()
        .then(data => expect(data).toBe('peanut butter'))
})

// -- If you expect a promise to be rejected use the .catch method
test('the fetch fails with an error', () => {
    function fetchData() {
        return delay(100).then(() => {
            throw Error()
        })
    }

    // Make sure to add expect.assertions to verify that a certain number of assertions are called.
    // Otherwise a fulfilled promise would not fail the test.
    expect.assertions(1)

    return fetchData().catch((reason) => {
        console.log(':::', typeof reason)
        expect(reason.name).toMatch('Error')
    })
})

// .resolves / .rejects
test('the data is peanut butter', () => {
    function fetchData() {
        return delay(100).then(() => ('peanut butter'))
    }
    expect.assertions(1)
    return expect(fetchData()).resolves.toBe('peanut butter');
})

// -- If you expect a promise to be rejected use the .catch method
test('the fetch fails with an error', () => {
    function fetchData() {
        return delay(100).then(() => {
            throw Error('error')
        })
    }
    expect.assertions(1)
    return expect(fetchData()).rejects.toBeTruthy()
})

// Async/Await
test('the data is peanut butter', async () => {
    function fetchData() {
        return delay(100).then(() => ('peanut butter'))
    }
    expect.assertions(1)
    const data = await fetchData()
    expect(data).toBe('peanut butter')
})

test('the fetch fails with an error', async () => {
    function fetchData() {
        return delay(100).then(() => {
            throw Error()
        })
    }
    expect.assertions(1)
    try {
        await fetchData()
    } catch (e) {
        expect(e).toBeTruthy()
    }
})

// -- combine async and await with .resolves or .rejects
test('the data is peanut butter', async () => {
    function fetchData() {
        return delay(100).then(() => ('peanut butter'))
    }
    expect.assertions(1)
    await expect(fetchData()).resolves.toBe('peanut butter')
})

test('the fetch fails with an error', async () => {
    function fetchData() {
        return delay(100).then(() => {
            throw Error()
        })
    }
    expect.assertions(1)
    await expect(fetchData()).rejects.toBeTruthy()
})
