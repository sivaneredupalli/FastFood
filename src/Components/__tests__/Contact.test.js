import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

test("Check with whether Contact component rendered", ()=>{
 render(<Contact/>)
 const inputBoxes = screen.getAllByRole("textbox")

 expect(inputBoxes.length).toBe(2);
})