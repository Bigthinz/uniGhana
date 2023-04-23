import { z } from 'zod';

export type LoginSchema = z.infer<typeof loginSchema>;
export type SignupSchema = z.infer<typeof signupSchema>;
export type GroupSchema = z.infer<typeof groupSchema>;
const emailRegex = /^[a-zA-Z0-9._%+-]+@oamarkets.com$/;

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .regex(emailRegex, 'Please enter a valid employee email address'),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
});

export const signupSchema = z.object({
  firstName: z.string().min(2, { message: 'must be at least 2 characters' }),
  lastName: z.string().min(2, { message: 'must be at least 2 characters' }),

  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .regex(emailRegex, 'Please enter a valid employee email address'),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
  confirmPassword: z.string(),
  //   .refine((val, password: string) => val === password, {
  //     message: 'Passwords do not match',
  //   }),
});

export const groupSchema = z.object({
  firstName: z.string().min(2, { message: 'must be at least 2 characters' }),
  lastName: z.string().min(2, { message: 'must be at least 2 characters' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .regex(emailRegex, 'Please enter a valid employee email address'),
  altEmail: z.string().email({ message: 'invalid email address' }).optional(),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'Invalid date format. Date must be in formatyyyy-mm-dd',
  }),
  // groupName: z.string().min(2, { message: 'must be at least 2 characters' }),
  phone: z
    .string()
    .regex(/^\d{6,14}$/, { message: 'invalid Ghana phone number format' }),
  altPhone: z
    .string()
    .regex(/^\d{6,14}$/, { message: 'invalid phone number format' })
    .optional(),
});
