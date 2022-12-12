import { useEffect, useContext } from "react";
import { EventSourceContext } from "src/contexts/EventSourceContext";

const useServerEvents = (onReceive: () => void) => {
  const eventSource = useContext(EventSourceContext);

  useEffect(() => {
    eventSource.onmessage = (message) => {
      const isNotification = JSON.parse(message.data);
      if (isNotification) {
        onReceive();
      }
    };
  }, [eventSource, onReceive]);
};

export default useServerEvents;
