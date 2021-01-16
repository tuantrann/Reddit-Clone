import { Box, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { EditDeletePostButton } from "../../components/EditDeletePostButton";
import { Layout } from "../../components/Layout";
import { useGetPostFromUrl } from "../../utils/useGetPostFromURl";
import { withApollo } from "../../utils/withApollo";

const Post = ({}) => {
  const router = useRouter();
  const { data, error, loading } = useGetPostFromUrl();
  if (loading) {
    return (
      <Layout>
        <div> loading... </div>
      </Layout>
    );
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (!data?.post) {
    return (
      <Layout>
        <Box>Could not find post</Box>
      </Layout>
    );
  }
  return (
    <Layout>
      <Heading mb={4}>{data?.post.title}</Heading>
      <Box mr={4}>{data?.post.text}</Box>
      <EditDeletePostButton
        id={data.post.id}
        creatorId={data.post.creator.id}
      />
    </Layout>
  );
};

export default withApollo({ ssr: true })(Post);
