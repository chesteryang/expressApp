import { Request, Response } from 'express';

export const index = (req: Request, res: Response) => {
    res.json({
      message: 'Welcome to API sekeleton.',
      version: '1.0.0'
    });
  };
