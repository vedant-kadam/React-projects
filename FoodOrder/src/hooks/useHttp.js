import { memo, useCallback, useEffect, useState } from "react";

async function sendHttpReq(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();
  if (!response.ok) {
    throw new Error(
      resData.message || "Something went wrong, failed to send request"
    );
  }
  return resData;
}

export default function useHttp(url, config, initialData) {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialData);

  const sendRequest = useCallback(
    async function sendRequest(requestData) {
      setIsLoading(true);
      try {
        const resData = await sendHttpReq(url, {
          ...config,
          body: requestData,
        });
        setData(resData);
      } catch (error) {
        setError(error.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [url, config]
  );
  const clearData = () => {
    setData(initialData);
  };
  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);
  return {
    error,
    isLoading,
    data,
    sendRequest,
    clearData,
  };
}
