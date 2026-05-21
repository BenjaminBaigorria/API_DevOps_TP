const  magic = require("../API/magic")
const request=require("supertest")

jest.setTimeout(30000);
describe("GET /magic", ()=>{
    test("Should respond with 200 status code and the first card should be Ancestor's chosen",async()=>{
        const response = await request(magic).get("/magic/cards")
        expect(response.statusCode).toBe(200);
        expect(response.body.cards[0].name).toEqual("Ancestor's Chosen");
    })
    test("should respond with 200 status code and the card multiverseid should be 10", async()=>{
        const response = await request(magic).get("/magic/card/10")
        expect(response.statusCode).toBe(200);
        expect(response.body.card.multiverseid).toEqual("10");
    })
})