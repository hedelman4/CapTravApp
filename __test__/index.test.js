import { getWeatherData } from "../src/client/js/app"
import { fetchAll } from "../src/client/js/app"


test("Test weather API",() => {
    expect(getWeatherData).toBeDefined()
})

test("Test fetch all from server",() => {
    expect(fetchAll).toBeDefined()
})