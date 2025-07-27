"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            backgroundColor: "#fef2f2",
          }}
        >
          <div
            style={{
              maxWidth: "400px",
              width: "100%",
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "0.5rem",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#dc2626",
                marginBottom: "1rem",
              }}
            >
              시스템 오류
            </h1>
            <p
              style={{
                color: "#6b7280",
                marginBottom: "1.5rem",
              }}
            >
              예상치 못한 오류가 발생했습니다.
            </p>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                onClick={reset}
                style={{
                  flex: 1,
                  padding: "0.75rem 1rem",
                  backgroundColor: "#10b981",
                  color: "white",
                  border: "none",
                  borderRadius: "0.375rem",
                  cursor: "pointer",
                }}
              >
                다시 시도
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                style={{
                  flex: 1,
                  padding: "0.75rem 1rem",
                  backgroundColor: "#6b7280",
                  color: "white",
                  border: "none",
                  borderRadius: "0.375rem",
                  cursor: "pointer",
                }}
              >
                홈으로
              </button>
            </div>
            <div
              style={{
                marginTop: "1.5rem",
                padding: "1rem",
                backgroundColor: "#f9fafb",
                borderRadius: "0.375rem",
              }}
            >
              <h3
                style={{
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                }}
              >
                자스민 마사지
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#6b7280",
                }}
              >
                전화: +60 16-931 8439
                <br />
                Warisan Square 2F, 2-13, Kota Kinabalu
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
