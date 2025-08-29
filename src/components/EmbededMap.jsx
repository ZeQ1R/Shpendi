

function EmbededMap() {
  return (
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
      <iframe
        title="Shpendi Restaurant & Pizzeria"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d370.70415556768035!2d21.065238!3d41.9866835!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353f7be1e34ca3f%3A0x404d00feaf690874!2sShpendi%20Restaurant%20%26%20Pizzeria!5e0!3m2!1sen!2smk!4v1755599914512!5m2!1sen!2smk"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default EmbededMap;
