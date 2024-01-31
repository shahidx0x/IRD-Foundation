import prisma from '../../../server';

const fetchCategories = async (options: any) => {
  const { page, limit, all } = options;
  const skip = parseInt(limit) * parseInt(page) - parseInt(limit) || 0;
  const take = parseInt(limit) || 10;
  const result = all
    ? await prisma.category.findMany()
    : await prisma.category.findMany({ skip, take });
  const total = await prisma.category.count();
  return { total, result };
};

export const categoriesService = {
  fetchCategories,
};
