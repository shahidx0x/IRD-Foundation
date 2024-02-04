export default async function searchCategory(search: string) {
  const response = await fetch(
    `https://irdf.onrender.com/api/v1/categories/list?sub_cat=true&dua=true&search=${search}`,
    { next: { revalidate: 60 } }
  );
  if (!response.ok) {
    throw new Error("Failed to search");
  }

  return response.json();
}
