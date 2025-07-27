export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <span className="text-white text-xl font-bold">J</span>
        </div>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-4"></div>
        <p className="text-emerald-700 font-medium">자스민 마사지 로딩 중...</p>
      </div>
    </div>
  )
}
