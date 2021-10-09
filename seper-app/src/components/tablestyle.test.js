import {render} from "@testing-library/react";

import Style from "../components/tablestyle";

it("checkButtonRender", () => {
    const ddn = render(<Style/>)    
    expect(ddn).toBeTruthy(); 

});