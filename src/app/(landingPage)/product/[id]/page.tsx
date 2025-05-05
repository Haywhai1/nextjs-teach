import React from "react";

type Props = {
  id: string;
};
const Page = async ({ params }: { params: Props }) => {
  const { id } = await params;

  return <div>this is dynamic page {id} </div>;
};

export default Page;
