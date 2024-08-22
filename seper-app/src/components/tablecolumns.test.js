import {render} from "@testing-library/react";

import tablecolumns from "../components/tablecolumns";

it("checkTableColumnRender", () => {
    const ddn = render(<tablecolumns/>)    
    expect(ddn).toBeTruthy(); 

});