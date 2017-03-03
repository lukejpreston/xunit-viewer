const Builder = require('./')

const logSuites = (suites) => {
    console.log(JSON.stringify(suites, null, 4))
}

describe('builder', () => {
    let builder
    let output

    beforeEach(() => {
        builder = Builder()
        output = null
    })

    describe('basic suite', () => {
        beforeEach(() => {
            builder.suite({
                name: 'suite name',
                status: 'passed',
                time: '0.0001'
            })
            output = builder.build()
        })

        it('title cases the name', () => {
            expect(output[0].name).toBe('Suite Name')
        })

        it('maps the status to valid statuses', () => {
            expect(output[0].status).toBe('pass')
        })

        it('adds all the other params', () => {
            expect(output[0].time).toBe('0.0001')
        })
    })

    describe('defualt suite', () =>{
        beforeEach(() => {
            builder.suite()
            output = builder.build()
        })

        it('has name of "No Name"', () => {
            expect(output[0].name).toBe('No Name')
        })

        it('has name no tests', () => {
            expect(output[0].tests.length).toBe(0)
        })

        it('has status of unknown', () => {
            expect(output[0].status).toBe('unknown')
        })

        it('has uuid', () => {
            expect(output[0]._uuid).toBeDefined()
        })
    })

    describe('nested suites', () => {
        beforeEach(() => {
            builder
                .suite({name: 'parent'})
                    .suite({name: 'child'})
                        .suite({name: 'second child'})
                        .endSuite()
                    .endSuite()
                .endSuite()

            output = builder.build()
        })

        it ('has the childdren', () => {
            expect(output[0].name).toBe('Parent')
            expect(output[0].suites[0].name).toBe('Child')
            expect(output[0].suites[0].suites[0].name).toBe('Second Child')
        })
    })

    describe('basic tests', () => {
        beforeEach(() => {
            builder.suite().test({name: 'test name', status: 'failed', time: '0.0001'})
            output = builder.build()
        })

        it('title cases the name', () => {
            expect(output[0].tests[0].name).toBe('Test Name')
        })

        it('maps the status to valid statuses', () => {
            expect(output[0].tests[0].status).toBe('fail')
        })

        it('adds all the other params', () => {
            expect(output[0].tests[0].time).toBe('0.0001')
        })
    })

    describe('default tests', () => {
        beforeEach(() => {
            builder.suite().test()
            output = builder.build()
        })

        it('has name of "No Name"', () => {
            expect(output[0].tests[0].name).toBe('No Name')
        })

        it('has status unknown', () => {
            expect(output[0].tests[0].status).toBe('unknown')
        })

        it('has uuid', () => {
            expect(output[0].tests[0]._uuid).toBeDefined()
        })
    })

    describe('tests without suites add a suite', () => {
        beforeEach(() => {
            builder.test()
            output = builder.build()
        })

        it('with name "No Matching Suite"', () => {
            expect(output[0].name).toBe('No Matching Suite')
        })

        it('has status unknown', () => {
            expect(output[0].status).toBe('unknown')
        })
    })

    describe('properties', () => {
        beforeEach(() => {
            builder
                .property({
                    key0: 'value0'
                })
                .property({
                    key1: 'value1'
                })
            output = builder.build()
        })

        it('adds properties', () => {
            expect(output[0].properties.key0).toBe('value0')
            expect(output[0].properties.key1).toBe('value1')
        })

        it('has uuid', () => {
            expect(output[0].properties._uuid).toBeDefined()
        })
    })

    describe('properties without suites add a suite', () => {
        beforeEach(() => {
            builder.property()
            output = builder.build()
        })

        it('with name "No Matching Suite"', () => {
            expect(output[0].name).toBe('No Matching Suite')
        })

        it('has status unknown', () => {
            expect(output[0].status).toBe('unknown')
        })
    })

})
