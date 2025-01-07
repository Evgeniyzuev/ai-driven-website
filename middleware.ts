import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const language = request.cookies.get('language')?.value || 'ru';
  
  // Set language cookie if it doesn't exist
  const response = NextResponse.next();
  if (!request.cookies.has('language')) {
    response.cookies.set('language', language);
  }
  
  return response;
}

// Указываем, для каких путей применять middleware
export const config = {
  matcher: [
    // Исключаем api routes и статические файлы
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 