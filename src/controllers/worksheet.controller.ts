import { NextFunction, Request, Response } from 'express';
import prisma from '../../prisma/prisma-client';

export const getWorksheet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // tslint:disable-next-line:no-console
  console.log('Received a GET Question request for single Worksheet');

  try {
    const worksheet = await prisma.worksheet.findUnique({
      where: {
        id: parseInt(req.params.worksheetId, 10),
      },
      include: {
        questions: {
          include: {
            answers: true,
          },
        },
      },
    });
    res.status(200).json(worksheet);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const getWorksheets = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // tslint:disable-next-line:no-console
  console.log('Received a GET Question request for all Worksheets');

  try {
    const worksheets = await prisma.worksheet.findMany();
    res.status(200).json(worksheets);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
