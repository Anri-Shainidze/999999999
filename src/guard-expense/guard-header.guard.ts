import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }
    const parts = authHeader.split(' ');
    const token = parts[1];

    if (token !== 'isAdmin') {
      throw new UnauthorizedException('You must be Admin to do this');
    }

    return true;
  }
}
