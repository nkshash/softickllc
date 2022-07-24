import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {MainLayout} from './layouts/Index.jsx';
import {
    Home,
    AboutUs,
    Team,
    Project,
    TechnicalSummary,
    CapabilityStatement,
    ContactUs,
    PageNotFound
} from './pages/Index.jsx';

const Routes = () => (
    <MainLayout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/capability-statement" component={CapabilityStatement} />
            <Route path="/profile" component={Team} />
            <Route path="/recent-project" component={Project} />
            <Route path="/technical-summary" component={TechnicalSummary} />
            <Route path="/contact-us" component={ContactUs} />
            <Route component={PageNotFound} />
        </Switch>
    </MainLayout>
    );

export default Routes;
