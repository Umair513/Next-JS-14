import { notFound } from "next/navigation";

export default function ReviewDetails({
  params,
}: {
  params: {
    reviewID: string;
    productID: string;
  };
}) {
  if (parseInt(params.reviewID) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review number {params.reviewID} for Product Number {params.productID}
    </h1>
  );
}
