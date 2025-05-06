function Card({ id, imageUrl, title, onClick }) {
  return (
    <div
      className="card"
      onClick={() => onClick(id)}
      style={{
        cursor: "pointer",
        width: "150px",
        height: "150px",
        overflow: "hidden",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        position: "relative",
        transition: "transform 0.2s ease",
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      {title && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "1.5rem",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 0.5rem",
            boxSizing: "border-box",
            color: "#fff",
            fontSize: "0.6rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </div>
      )}
    </div>
  );
}

export default Card;
