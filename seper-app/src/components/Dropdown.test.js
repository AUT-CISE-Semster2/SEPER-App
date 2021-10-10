import {render} from "@testing-library/react";

import Dropdown from "../components/Dropdown";

it("checkButtonRender", () => {
    const ddn = render(<Dropdown/>)    
    expect(ddn).toBeTruthy(); 

});