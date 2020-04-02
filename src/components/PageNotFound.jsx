import React from "react";
import { DefaultLayout } from "./common/Layout";
import { NavLink } from "react-router-dom";
import { NavLink as MyNavLink } from "reactstrap";


const PageNotFound = () => {
    return (
        <DefaultLayout header="">
            <div className="text-center">
                <span className="display-1 d-block">404</span>
                <div className="mb-4 lead">The page you are looking for was not found.</div>
                <MyNavLink tag={NavLink} to="/" className="btn btn-link">Back to Home</MyNavLink>
            </div>
        </DefaultLayout>
    );
};

export default PageNotFound;
