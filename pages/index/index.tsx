// @ts-ignore
import { useEffect, useState } from "react";
import withApollo from "../../lib/with-apollo";
import { useUserQuery } from "../../lib/graphql/queries/user.graphql";
// @ts-ignore
import { Wrapper, Text, Button } from "bushido-strap";
import Landing from "./components/Landing";

const Index = () => {
  const { data: userData } = useUserQuery({
    variables: {
      id: "1",
    },
  });
  console.log(userData);

  if (userData) {
    return (
      <Wrapper>
        <Landing user={userData} />
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Landing user={userData} />
      </Wrapper>
    );
  }
};

export default withApollo(Index);
