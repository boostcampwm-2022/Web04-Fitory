import React, { createContext, PropsWithChildren } from "react";
import { authStorage } from "src/services/ClientStorage";

const eventSource = new EventSource(
  `${process.env.SERVER_BASE_URL}event/register?user_id=${authStorage.get()}`,
  { withCredentials: true },
);

const EventSourceContext = createContext(eventSource);

const EventSourceProvider = ({ children }: PropsWithChildren) => {
  return <EventSourceContext.Provider value={eventSource}>{children}</EventSourceContext.Provider>;
};

export { EventSourceContext, EventSourceProvider };
