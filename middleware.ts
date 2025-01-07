import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Проверяем наличие cookie с языком
  const languageCookie = request.cookies.get('preferredLanguage')
  
  // Если уже есть языковой префикс в URL или cookie установлен, пропускаем
  if (
    request.nextUrl.pathname.startsWith('/en') || 
    request.nextUrl.pathname.startsWith('/ru') ||
    languageCookie
  ) {
    return NextResponse.next()
  }

  // Определяем предпочитаемый язык только при первом входе
  const acceptLanguage = request.headers.get('accept-language')
  let preferredLanguage = 'ru' // По умолчанию русский
  
  if (acceptLanguage?.includes('en')) {
    preferredLanguage = 'en'
  }

  // Создаем ответ
  const response = preferredLanguage === 'en'
    ? NextResponse.redirect(new URL(`/en${request.nextUrl.pathname}`, request.url))
    : NextResponse.next()

  // Устанавливаем cookie
  response.cookies.set('preferredLanguage', preferredLanguage, {
    maxAge: 60 * 60 * 24 * 30, // 30 дней
    path: '/'
  })

  return response
}

// Указываем, для каких путей применять middleware
export const config = {
  matcher: [
    // Исключаем api routes и статические файлы
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 