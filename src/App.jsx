import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import {Provider} from "react-redux";
import store from "./utils/store.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainContainer from "./components/MainContainer.jsx";
import WatchPage from "./components/WatchPage.jsx";

const appRouter = createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[
        {
            path:"/",
            element:<MainContainer/>
        },
        {
            path:"/watch",
            element:<WatchPage/>
        }
    ]
}]);

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Header/>
                <RouterProvider router={appRouter}/>
            </div>
        </Provider>
    );

};

export default App;
