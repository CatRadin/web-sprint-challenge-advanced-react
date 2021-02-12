import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //Render-----------------------------------
    render( <CheckoutForm />)

    //Query the Header ------------------------
    const header= screen.getByText(/checkout form/i);

    //Assert ---- Expect ----------------------
    expect(header).toBeInTheDocument();
});





test("form shows success message on submit with form details", () => {
     //render
    render( <CheckoutForm /> )

     //query for all inputs
    const firstName = screen.getByLabelText(/first name/i)
    const lastName = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)
    const button = screen.getByRole("button", { name: /checkout/i })
 
     //type into inputs---- with userEvent! 
     userEvent.type(firstName, "Catherine")
     userEvent.type(lastName, "Radin")
     userEvent.type(address, "123 rainbow road")
     userEvent.type(city, "Bowser's Castle")
     userEvent.type(state, "Mushroom Kingdom")
     userEvent.type(zip, "45678")
 
 
     //click the button
    userEvent.click(button)
 
    //query the success message + the form details full name
    const successMessage = screen.getByText(/You have ordered some Plants!/i)
    const formDetailsFullName = screen.getByText(/catherine radin/i)

    //assert --- expect!!
    expect(successMessage).toBeInTheDocument();
    expect(formDetailsFullName).toBeInTheDocument();
 
});
