
import { act,screen } from "react"
import RestaurantsMenu from "../RestaurantsMenu"
import { render } from "@testing-library/react"
import MOCK_DATA from "../mocks/resMenu.json"
import "@testing-library/jest-dom"
global.fetch = jest.fn(()=>
Promise.resolve({
    json : () => Promise.resolve(MOCK_DATA)
}))

it("Should display the Restaurant Menu and cart items", 
   async ()=>{
    await act(()=>render(<RestaurantsMenu/>))
    
       } )