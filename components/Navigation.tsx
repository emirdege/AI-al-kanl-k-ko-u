'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: '/today', label: 'Bugün' },
    { href: '/history', label: 'Geçmiş' },
  ]

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="font-bold text-lg text-gray-900">
            Alışkanlık Koçu
          </Link>
          <div className="flex space-x-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                  pathname === link.href
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
