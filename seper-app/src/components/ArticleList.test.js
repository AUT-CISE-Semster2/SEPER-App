import {render} from "@testing-library/react";

import ArticleList from "../components/ArticleList";

it("checkButtonRender", () => {
    const ddn = render(<ArticleList/>)    
    expect(ddn).toBeTruthy(); 

});