import {render} from "@testing-library/react";

import Style from "../components/tablestyle";

it("checkStyleRender", () => {
    const ddn = render(<Style/>)    
    expect(ddn).toBeTruthy(); 

});