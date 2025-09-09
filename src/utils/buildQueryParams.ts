export const buildQueryParams = (
  params: Record<string, string | null | undefined>,
): URLSearchParams => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      //filter out null or undefined values or '' values
      searchParams.append(key, value);
    }
  });

  return searchParams;
};
