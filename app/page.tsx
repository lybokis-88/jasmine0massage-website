export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          자스민 마사지
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          코타키나발루 최고의 마사지 경험
        </p>
        <div className="bg-green-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-green-800 mb-2">
            배포 성공! 🎉
          </h2>
          <p className="text-green-600">
            전화: +60 16-931 8439<br/>
            위치: Warisan Square 2F, 2-13, Kota Kinabalu
          </p>
        </div>
      </div>
    </main>
  )
}
