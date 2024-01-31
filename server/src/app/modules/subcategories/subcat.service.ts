import prisma from '../../../server';

const fetchSubCategories = async (options: any) => {
  const { page, limit, all } = options;
  const skip = parseInt(limit) * parseInt(page) - parseInt(limit) || 0;
  const take = parseInt(limit) || 10;
  const result = all
    ? await prisma.sub_category.findMany()
    : await prisma.sub_category.findMany({ skip, take });
  const total = await prisma.sub_category.count();
  return { total, result };
};

export const SubCategoriesService = {
  fetchSubCategories,
};
