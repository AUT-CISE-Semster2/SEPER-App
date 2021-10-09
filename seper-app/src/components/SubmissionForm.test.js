import {render} from "@testing-library/react";

import SubmissionForm from "../components/SubmissionForm";

it("checkButtonRender", () => {
    const ddn = render(<SubmissionForm/>)    
    expect(ddn).toBeTruthy(); 

});