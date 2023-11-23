export default function ReviewDetails({
  params,
}: {
  params: {
    reviewID: string;
    productID: string;
  };
}) {
  return (
    <h1>
      Review number {params.reviewID} for Product Number {params.productID}
    </h1>
  );
}
