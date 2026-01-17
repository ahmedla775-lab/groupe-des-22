export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0F172A",
        color: "#F8FAFC",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "24px",
        fontFamily: "Cairo, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "12px" }}>
        Groupe des 22
      </h1>

      <p style={{ fontSize: "16px", opacity: 0.8, marginBottom: "24px" }}>
        منصة المهام الرقمية
      </p>

      <button
        style={{
          background: "#10B981",
          color: "#fff",
          border: "none",
          padding: "14px 28px",
          borderRadius: "999px",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer",
          boxShadow: "0 0 20px rgba(16,185,129,0.4)",
        }}
      >
        دخول المنصة
      </button>
    </main>
  );
}
