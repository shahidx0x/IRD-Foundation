import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { categoriesService } from './cat.service';


export const CategoriesControllers = {
  getCategories: catchAsync(async (req: Request, res: Response) => {
    const page = Number(req.query.page || 1);
    const limit = Number(req.query.limit || 10);
    const all = req.query.all ? true : false;
    const result = await categoriesService.fetchCategories({ page, limit, all });
    const { total, ...categories } = result;
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Categories fetched successfully',
      meta: {
        limit,
        page,
        total,
      },
      data: categories,
    });
  }),
};
