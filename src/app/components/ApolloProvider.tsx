"use client";

import { ApolloProvider as Provider } from "@apollo/client";
import { createApolloClient } from "@/lib/apollo-client";
import { ReactNode } from "react";

export default function ApolloProvider({ children }: { children: ReactNode }) {
  const client = createApolloClient();

  return <Provider client={client}>{children}</Provider>;
}
