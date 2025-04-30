import { render,screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

test("should diplay the header component", ()=>
{
    render(
    <BrowserRouter
    Provider>
    <Provider store={appStore}>
    <Header/>
 </Provider>
 </BrowserRouter>

)

const LogginButton = screen.getByRole("button",{name:"Login"});

//Assertion
expect(LogginButton).toBeInTheDocument();

})