import withApollo from "../lib/with-apollo";
import Link from "next/link";
import { useUserQuery } from "../lib/graphql/queries/user.graphql";
import { Wrapper, Card, Text } from "bushido-strap";

const Index = () => {
  const { data } = useUserQuery({
    variables: {
      id: "2",
    },
  });

  if (data) {
    const { user } = data;
    return (
      <Wrapper>
        <Card>
          <Text>
            You're signed in as {user?.username} and you're dynamic goto{" "}
            <Link href="/about">
              <a>static</a>
            </Link>{" "}
            page.
          </Text>
        </Card>
      </Wrapper>
    );
  }

  return <div>...</div>;
};

export default withApollo(Index);
