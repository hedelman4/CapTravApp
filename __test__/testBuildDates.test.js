import{buildDates} from '../src/client/js/app.js'

describe('Test date input build functionality',()=>{
    test('Test buildDates() function',()=>{
        expect(buildDates).toBeDefined();
    })
})