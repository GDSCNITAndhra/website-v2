function PDF({ id }) {
  return (
    <iframe
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        zIndex: "100",
      }}
      src={`../../public/certificates/${id}`}
      allow="autoplay"
    />
  );
}

export default PDF;
