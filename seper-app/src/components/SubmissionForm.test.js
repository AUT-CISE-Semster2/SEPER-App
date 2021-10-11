import {render} from "@testing-library/react";

import SubmissionForm from "../components/SubmissionForm";

it("checkSubmisstionRender", () => {
    const ddn = render(<SubmissionForm/>)    
    expect(ddn).toBeTruthy(); 

});