import {render} from "@testing-library/react";

import Dropdown from "../components/Dropdown";

it("CheckDropdownRender", () => {
    const ddn = render(<Dropdown/>)    
    expect(ddn).toBeTruthy(); 

});