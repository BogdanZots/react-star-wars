/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import ErrorMessage from "@components/ErrorMessage/ErrorMessage";
export const WithErrorApi = (View) => {
  return (props) => {
    const [errorApi, setErrorApi] = useState(false);
    const [isLoading, setisLoading] = useState(true);
    return (
      <>
        {errorApi ? (
          <ErrorMessage />
        ) : (
          <>
            <View
              setErrorApi={setErrorApi}
              setLoader={setisLoading}
              isLoading={isLoading}
              {...props}
            />
          </>
        )}
      </>
    );
  };
};
