import {render} from "@testing-library/react";

import ArticleList from "../components/ArticleList";

it("CheckArticleListRender", () => {
    const ddn = render(<ArticleList/>)    
    expect(ddn).toBeTruthy(); 

});