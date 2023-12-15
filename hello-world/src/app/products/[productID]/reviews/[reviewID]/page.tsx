import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetails({
  params,
}: {
  params: {
    reviewID: string;
    productID: string;
  };
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review");
  }
  if (parseInt(params.reviewID) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review number {params.reviewID} for Product Number {params.productID}
    </h1>
  );
}
