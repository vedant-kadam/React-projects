import React from "react";
import PageContent from "../components/Pagecontent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const routeError = useRouteError();

  let title = "An Error Occured";
  let message = "Something went wrong!";

  if (routeError.status === 500) {
    // message = JSON.parse(routeError.data).message;
    message = routeError.data.message;
  }
  if (routeError === 400) {
    message = "Could not find the resources";
    title = "Could not find";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
