import { lazy, Suspense } from "react";
import RoutesEnum from "../utils/enums/routes.enum";
import Loader from "../components/loader/loader.component";
import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";

const Home = lazy(() => import("../pages/home/home.page"));
const LiteratureReviewPage = lazy(() => import("../pages/literature-review/literature-review.page"));

function Routes() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loader width={100} height={100} isSuspense />}>
                <Switch>
                    <Route path={RoutesEnum.Root} element={<Home />} />
                    <Route path={RoutesEnum.LiteratureReview} element={<LiteratureReviewPage />} />
                    <Route
                        path={RoutesEnum.NotFound}
                        element={<p>PÁGINA NÃO ENCONTRADA</p>}
                    />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default Routes;
