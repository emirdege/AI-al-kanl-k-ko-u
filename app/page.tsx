import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        AI Alışkanlık Koçu
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Günlük alışkanlıklarını takip et ve kişiselleştirilmiş AI geri bildirimi al
      </p>
      <div className="space-x-4">
        <Link
          href="/today"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Takibe Başla
        </Link>
        <Link
          href="/history"
          className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition"
        >
          Geçmişi Gör
        </Link>
      </div>
    </div>
  )
}
