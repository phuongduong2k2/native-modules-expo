import { useEffect, useState } from "react";
import { Linking } from "react-native";

export const useInitialURL = () => {
  const [url, setUrl] = useState<string | null>(null);
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    const getUrlAsync = async () => {
      // Get the deep link used to open the app
      try {
        setProcessing(true);
        const initialUrl = await Linking.getInitialURL();
        setUrl(initialUrl);
      } catch (error) {
        alert("some things wrong");
      }

      setProcessing(false);
    };

    getUrlAsync();
  }, []);

  return { url, processing };
};
