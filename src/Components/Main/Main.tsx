import React, { FunctionComponent, Suspense } from 'react';
import {
    Switch,
    Route
} from "react-router-dom";import Toolbar from "../Toolbar";

const ImageGridPage = React.lazy(() => import('../ImageGalleryPage'));
const LikedPage = React.lazy(() => import('../LikedPage'));

const Main: FunctionComponent = () => {
    return (
        <main
            className="main"
        >
            <div
                className="main__content"
            >
                <Switch>
                    <Route path="/liked">
                        <Suspense
                            fallback={null}
                        >
                            <LikedPage/>
                        </Suspense>
                    </Route>
                    <Route path="/">
                        <Suspense
                            fallback={null}
                        >
                            <ImageGridPage/>
                        </Suspense>
                    </Route>
                </Switch>
            </div>
            <Toolbar/>
        </main>
    );
};

export default Main;
