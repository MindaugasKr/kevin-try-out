import React, { FunctionComponent, Suspense } from 'react';
import {
    Switch,
    Route
} from "react-router-dom";import Toolbar from "../Toolbar";

const ImageGridPage = React.lazy(() => import('../ImageGalleryPage'));
const LikedPage = React.lazy(() => import('../LikedPage'));

const Main: FunctionComponent = () => {
    return (
        <main>
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
            <Toolbar/>
        </main>
    );
};

export default Main;
