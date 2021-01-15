import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import NextLink from "next/link";
import React from "react";
import { useState } from "react";
import { Layout } from "../components/Layout";
import { UpdootSection } from "../components/UpdootSection";
import { usePostsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
const Index = () => {
  const [variables, setVariables] = useState({
    limit: 15,
    cursor: null as null | string,
  });
  const [{ data, fetching }] = usePostsQuery({
    variables,
  });
  if (!fetching && !data) {
    return <div> you got query failed for some reason</div>;
  }
  return (
    <Layout>
      {fetching && !data ? (
        <div>Loading...</div>
      ) : (
        <Stack spacing={8}>
          {data!.posts.posts.map((p) => (
            <Flex key={p.id} p={5} shadow="md" borderWidth="1px">
              <UpdootSection post={p} />
              <Box>
                <NextLink href="/post/[id]" as={`/post/${p.id}`}>
                <Link>
              <Heading fontSize="xl">{p.title}</Heading> 
              </Link>
              </NextLink>
              <Text>Posted by {p.creator.username}</Text>
              <Text mt={4}>{p.textSnippet}</Text>
              </Box>
            </Flex>
          ))}
        </Stack>
      )}
      {data && data.posts.hasMore ? (
        <Flex>
          <Button
            onClick={() => {
              setVariables({
                limit: variables.limit,
                cursor: data.posts.posts.[data.posts.posts.length - 1].createdAt,
              });
            }}
            isLoading={fetching}
            m="auto"
            my={8}
          >
            {" "}
            Load more
          </Button>
        </Flex>
      ) : null}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
