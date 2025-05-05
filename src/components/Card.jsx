function Card({ id, imageUrl, title, onClick }) {
  return (
    <div
      className="card"
      onClick={() => onClick(id)}
      style={{
        cursor: "pointer",
        padding: "10px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        transition: "transform 0.2s ease",
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "4px",
          marginBottom: "0.5rem",
        }}
      />
      {title && (
        <p
          style={{
            textAlign: "center",
            fontSize: "0.9rem",
            color: "#333",
            margin: 0,
          }}
        >
          {title}
        </p>
      )}
    </div>
  );
}

export default Card;
