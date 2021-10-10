import {render} from "@testing-library/react";

import Table from "../components/evidencetable";

it("checkButtonRender", () => {
    const ddn = render(<Table/>)    
    expect(ddn).toBeTruthy(); 

});