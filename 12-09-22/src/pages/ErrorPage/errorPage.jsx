export const ErrorPage = (pippo) => {
  return pippo.status === 404 ? "Uh Oh Stinky" : "Does not Compute";
};

export default ErrorPage;
