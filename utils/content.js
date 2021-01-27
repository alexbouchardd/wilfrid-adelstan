const space = process.env.CONTENTFUL_SPACE_ID || "06uv1yi1fjlr";
const accessToken =
  process.env.CONTENTFUL_ACCESS_TOKEN ||
  "jj8ZLwbc1CIAFcd2CFZhK9FZftfqm5KV68IZYy7L53k";

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});

export async function fetchEntries(locale) {
  const options = { locale, include: 10 };
  const home = await client.getEntry("5zyu8SjBNXn2QbVUlibYRs", options);
  const navigation = await client.getEntry("7LIkFS0baNRSpMC4UykaIw", options);
  return {
    home,
    navigation,
  };
}

export default { fetchEntries };
