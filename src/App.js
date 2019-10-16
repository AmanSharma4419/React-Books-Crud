import React from "react"
import { Route, BrowserRouter, Switch,} from "react-router-dom"

import Header from "./Components/Header";
import Createarticle from "./Components/Createarticle";
import Readarticle from "./Components/Readarticle";
import UpdateArticle from "./Components/UpdateArticle"

import "./App.css"
class App extends React.Component {

    render() {
        return( 
            <React.Fragment>
                <div className="Parent">
                    <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path="/CreateArticle" render={props => <Createarticle Heading="CreateArticle" Placeholder1="CreateArticle" type="Create" {...props}/>}/>
                        <Route path="/UpdateArticle" component={UpdateArticle}/> 
                        <Route path="/ReadArticle" component={Readarticle}/>
                    </Switch>
                    </BrowserRouter>
                </div>
            </React.Fragment>
            
        )
    }
}
export default App;