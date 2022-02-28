import { AppError } from "@shared/errors/AppError";

export function dd(error) {
    throw new AppError(error);
}